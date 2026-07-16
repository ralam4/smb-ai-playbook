// useSEO.js — tiny per-route SEO hook for the SPA.
//
// Sets document.title, upserts <meta name="description">,
// <meta property="og:title">, <meta property="og:description">, and
// <link rel="canonical"> on mount and whenever title/description/canonical
// change. There's no cleanup on unmount by design — the next route's
// useSEO call simply overwrites these tags, which is all an SPA needs.
//
// IMPORTANT: like any hook, this must be called unconditionally at the top
// of a component, before any early `return`. Pages that render a "not
// found" state for missing data (e.g. GuidePage, AgentPage) should resolve
// their data and compute a fallback title/description FIRST, call useSEO
// once with those values, and only then branch into the early return.
//
// Usage:
//   useSEO({
//     title: 'Free AI Guides for Small Business — SMB AI Playbook',
//     description: '150-160 char summary…',
//     canonical: '/guides', // absolute URL is built from this path
//   })

import { useEffect } from 'react'

export const SITE_URL = 'https://smbaiplaybook.xyz'

// Truncates a string to maxLen characters, breaking on a word boundary and
// appending an ellipsis. Used to keep meta descriptions in the ~150-160 char
// sweet spot when the source copy (guide intros, agent descriptions) runs long.
export function truncate(str, maxLen = 155) {
  if (!str || str.length <= maxLen) return str || ''
  const cut = str.slice(0, maxLen - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen - 1)}…`
}

function upsertMetaByName(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(path) {
  if (!path) return
  const href = path.startsWith('http') ? path : `${SITE_URL}${path}`
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function useSEO({ title, description, canonical } = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    if (title) document.title = title
    upsertMetaByName('description', description)
    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', description)
    upsertCanonical(canonical)
  }, [title, description, canonical])
}
