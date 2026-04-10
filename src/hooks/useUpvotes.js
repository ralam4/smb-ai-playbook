import { useState, useCallback } from 'react'

const STORAGE_KEY = 'smb-playbook-upvotes'
const VOTES_KEY = 'smb-playbook-user-votes'

function loadCounts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function loadUserVotes() {
  try {
    return JSON.parse(localStorage.getItem(VOTES_KEY)) || {}
  } catch {
    return {}
  }
}

export default function useUpvotes() {
  const [counts, setCounts] = useState(loadCounts)
  const [userVotes, setUserVotes] = useState(loadUserVotes)

  const hasVoted = useCallback((slug) => !!userVotes[slug], [userVotes])

  const getCount = useCallback((slug) => counts[slug] || 0, [counts])

  const toggleVote = useCallback((slug) => {
    setCounts((prev) => {
      const current = prev[slug] || 0
      const voted = !!userVotes[slug]
      const next = { ...prev, [slug]: voted ? Math.max(0, current - 1) : current + 1 }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })

    setUserVotes((prev) => {
      const next = { ...prev }
      if (next[slug]) {
        delete next[slug]
      } else {
        next[slug] = true
      }
      localStorage.setItem(VOTES_KEY, JSON.stringify(next))
      return next
    })
  }, [userVotes])

  const sortByVotes = useCallback((guides) => {
    return [...guides].sort((a, b) => (counts[b.slug] || 0) - (counts[a.slug] || 0))
  }, [counts])

  return { counts, getCount, hasVoted, toggleVote, sortByVotes }
}
