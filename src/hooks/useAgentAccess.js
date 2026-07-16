import { useState, useEffect, useCallback } from 'react'

const UNLOCKED_KEY = 'smbai_unlocked_packs'
const PENDING_KEY = 'smbai_pending_pack'

function readUnlocked() {
  try {
    const raw = localStorage.getItem(UNLOCKED_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeUnlocked(slugs) {
  try {
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(slugs))
  } catch {
    /* localStorage unavailable */
  }
}

export default function useAgentAccess() {
  const [unlocked, setUnlocked] = useState(readUnlocked)

  // Sync across tabs
  useEffect(() => {
    function onStorage(e) {
      if (e.key === UNLOCKED_KEY) setUnlocked(readUnlocked())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const isPackUnlocked = useCallback(
    (industrySlug) => unlocked.includes(industrySlug),
    [unlocked],
  )

  const unlockPack = useCallback((industrySlug) => {
    if (!industrySlug) return
    setUnlocked((prev) => {
      if (prev.includes(industrySlug)) return prev
      const next = [...prev, industrySlug]
      writeUnlocked(next)
      return next
    })
  }, [])

  return { isPackUnlocked, unlockPack }
}

export function setPendingPack(slug) {
  try {
    if (slug) {
      localStorage.setItem(PENDING_KEY, slug)
      // Only one checkout can be in flight. Clear any stale pending guide so an
      // abandoned guide checkout can't hijack this purchase on /success.
      localStorage.removeItem('smbai_pending_unlock')
    }
  } catch {
    /* noop */
  }
}

export function consumePendingPack() {
  try {
    const slug = localStorage.getItem(PENDING_KEY)
    if (slug) localStorage.removeItem(PENDING_KEY)
    return slug || null
  } catch {
    return null
  }
}
