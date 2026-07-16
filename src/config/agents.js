// Single Stripe Payment Link for all Agent Pack unlocks.
// Set success URL in Stripe dashboard to: https://smbaiplaybook.xyz/success
// Before redirecting, we stash the intended industry slug in localStorage via
// setPendingPack() from useAgentAccess. The /success page consumes it.
//
// Leave AGENTS_STRIPE_URL as null until Rafee creates a $29 Payment Link in
// the Stripe dashboard (success URL https://smbaiplaybook.xyz/success), then
// pastes it here. The AgentPaywallGate renders a "coming soon" state in that
// case so the UI works end-to-end before Stripe is configured.
export const AGENTS_STRIPE_URL = null

export const AGENTS_PRICE_DISPLAY = '$29'
export const AGENTS_PRICE_SUBLINE =
  'one-time, unlocks all 3 blueprints in this pack on this browser'
