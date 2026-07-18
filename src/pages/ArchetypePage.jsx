import { useState } from 'react'
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { questions, resultTypes, scoreArchetype } from '../data/archetype'
import ArchetypeIntro from '../components/ArchetypeIntro'
import ArchetypeQuestion from '../components/ArchetypeQuestion'
import ArchetypeResult from '../components/ArchetypeResult'
import useSEO from '../hooks/useSEO'

const STORAGE_KEY = 'smbai_archetype'

function saveResult(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    /* noop */
  }
}

export default function ArchetypePage() {
  const { result: resultParam } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const urlResult = resultParam ? resultTypes[resultParam] : null

  useSEO(
    urlResult
      ? {
          title: `${urlResult.name} — AI Archetype for Small Business Owners`,
          description: `${urlResult.tagline} ${urlResult.aiEdge} is this archetype's AI edge. Take the 2-minute quiz to find yours — no email required.`,
          canonical: `/archetype/${urlResult.id}`,
        }
      : {
          title: 'Find Your AI Archetype — SMB AI Playbook',
          description:
            'A 2-minute quiz that matches your small business to the AI guides built for how you already think and work. No email required, just your result.',
          canonical: '/archetype',
        },
  )

  const [phase, setPhase] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  // Result mode: /archetype/:result renders the shared result page directly.
  if (resultParam) {
    if (!urlResult) return <Navigate to="/archetype" replace />
    const tookQuiz = Boolean(location.state?.fromQuiz)
    return (
      <div className="min-h-screen">
        <ArchetypeResult
          resultType={urlResult}
          tookQuiz={tookQuiz}
          onRetake={() => navigate('/archetype')}
        />
      </div>
    )
  }

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      const winningType = scoreArchetype(newAnswers)
      saveResult(winningType)
      navigate(`/archetype/${winningType}`, { state: { fromQuiz: true } })
    }
  }

  const handleBack = () => {
    if (currentIndex === 0) {
      setPhase('intro')
      setAnswers([])
      return
    }
    setAnswers((prev) => prev.slice(0, -1))
    setCurrentIndex((prev) => prev - 1)
  }

  return (
    <div className="min-h-screen">
      {phase === 'intro' && (
        <ArchetypeIntro onStart={() => setPhase('question')} />
      )}
      {phase === 'question' && (
        <ArchetypeQuestion
          key={currentIndex}
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}
    </div>
  )
}
