import { useState } from 'react'
import { questions, resultTypes, scoreArchetype } from '../data/archetype'
import ArchetypeIntro from '../components/ArchetypeIntro'
import ArchetypeQuestion from '../components/ArchetypeQuestion'
import ArchetypeResult from '../components/ArchetypeResult'
import useSEO from '../hooks/useSEO'

export default function ArchetypePage() {
  useSEO({
    title: 'Find Your AI Archetype — SMB AI Playbook',
    description:
      'A 2-minute quiz that matches your small business to the AI guides built for how you already think and work. No email required, just your result.',
    canonical: '/archetype',
  })
  const [phase, setPhase] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      const winningType = scoreArchetype(newAnswers)
      setResult(resultTypes[winningType])
      setPhase('result')
    }
  }

  const handleRetake = () => {
    setPhase('intro')
    setCurrentIndex(0)
    setAnswers([])
    setResult(null)
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
        />
      )}
      {phase === 'result' && (
        <ArchetypeResult resultType={result} onRetake={handleRetake} />
      )}
    </div>
  )
}
