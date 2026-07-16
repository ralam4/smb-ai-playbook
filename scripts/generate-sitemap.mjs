#!/usr/bin/env node
// generate-sitemap.mjs — build-time sitemap.xml generator.
//
// Imports the site's data modules directly (they're dependency-free ESM, no
// bundler needed) and emits public/sitemap.xml covering every static route
// plus every guide, Pro industry library, Agent Pack, and agent blueprint
// page. Wired in as `prebuild` in package.json so it regenerates on every
// `npm run build` (including on Vercel); the output is also committed so
// the sitemap is visible/diffable in the repo.
//
// Run directly: node scripts/generate-sitemap.mjs

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import guides from '../src/data/guides.js'
import industries from '../src/data/industries.js'
import { agents } from '../src/data/agents/index.js'

const SITE_URL = 'https://smbaiplaybook.xyz'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml')

// Static routes. /success is intentionally excluded — it's a post-purchase
// confirmation page with no evergreen content worth indexing.
const staticRoutes = [
  '/',
  '/guides',
  '/pro',
  '/agents',
  '/archetype',
  '/about',
  '/contact',
  '/terms',
  '/privacy',
  '/refunds',
]

const guideRoutes = guides.map((g) => `/guide/${g.slug}`)
const proIndustryRoutes = industries.map((i) => `/pro/${i.slug}`)
const agentPackRoutes = industries.map((i) => `/agents/${i.slug}`)
const agentRoutes = agents.map((a) => `/agents/${a.industry}/${a.slug}`)

const urls = [
  ...staticRoutes,
  ...guideRoutes,
  ...proIndustryRoutes,
  ...agentPackRoutes,
  ...agentRoutes,
]

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const lastmod = new Date().toISOString().slice(0, 10)

const body = urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(SITE_URL + url)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(OUTPUT_PATH, xml, 'utf-8')

console.log(`sitemap.xml written with ${urls.length} URLs:`)
console.log(`  static:            ${staticRoutes.length}`)
console.log(`  guides:            ${guideRoutes.length}`)
console.log(`  pro industries:    ${proIndustryRoutes.length}`)
console.log(`  agent packs:       ${agentPackRoutes.length}`)
console.log(`  agent blueprints:  ${agentRoutes.length}`)
console.log(`  total:             ${urls.length}`)
