import { useState, useEffect, useCallback } from 'react'

const UNLOCKED_KEY = 'smbai_unlocked_guides'
const PENDING_KEY = 'smbai_pending_unlock'

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

export default function useProAccess() {
  const [unlocked, setUnlocked] = useState(readUnlocked)

  // Sync across tabs
  useEffect(() => {
    function onStorage(e) {
      if (e.key === UNLOCKED_KEY) setUnlocked(readUnlocked())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const isUnlocked = useCallback(
    (slug) => unlocked.includes(slug),
    [unlocked],
  )

  const unlock = useCallback((slug) => {
    if (!slug) return
    setUnlocked((prev) => {
      if (prev.includes(slug)) return prev
      const next = [...prev, slug]
      writeUnlocked(next)
      return next
    })
  }, [])

  const setPendingUnlock = useCallback((slug) => {
    try {
      if (slug) localStorage.setItem(PENDING_KEY, slug)
    } catch {
      /* noop */
    }
  }, [])

  const consumePendingUnlock = useCallback(() => {
    try {
      const slug = localStorage.getItem(PENDING_KEY)
      if (slug) localStorage.removeItem(PENDING_KEY)
      return slug || null
    } catch {
      return null
    }
  }, [])

  return { isUnlocked, unlock, setPendingUnlock, consumePendingUnlock }
}
