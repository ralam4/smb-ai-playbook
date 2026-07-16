// Single Stripe Payment Link for all Agent Pack unlocks.
// Set success URL in Stripe dashboard to: https://smbaiplaybook.xyz/success
// Before redirecting, we stash the intended industry slug in localStorage via
// setPendingPack() from useAgentAccess. The /success page consumes it.
//
// If this is ever set back to null, the AgentPaywallGate falls back to a
// "coming soon" state so the UI keeps working without Stripe.
export const AGENTS_STRIPE_URL = 'https://buy.stripe.com/cNi5kCalI72F96u9GY6sw01'

export const AGENTS_PRICE_DISPLAY = '$29'
export const AGENTS_PRICE_SUBLINE =
  'one-time, unlocks all 3 blueprints in this pack on this browser'
