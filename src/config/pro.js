// Single Stripe Payment Link for all Pro guide unlocks.
// Set success URL in Stripe dashboard to: https://smbaiplaybook.xyz/success
// Before redirecting, we stash the intended guide slug in localStorage via
// setPendingUnlock() from useProAccess. The /success page consumes it.
//
// Leave PRO_STRIPE_URL as null until the Payment Link is created. The
// PaywallGate renders a "coming soon" state in that case so the UI works
// end-to-end before Stripe is configured.
export const PRO_STRIPE_URL = 'https://buy.stripe.com/test_3cI5kCalI9aN1E2bP66sw00'

export const PRO_PRICE_DISPLAY = '$5'
export const PRO_PRICE_SUBLINE = 'one-time, unlock this guide forever on this browser'
