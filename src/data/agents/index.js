import coffeeShopAgents, { pack as coffeeShopPack } from './coffee-shop.js'

// TODO (Task 3 — remaining 7 industries, added by parallel content agents):
//   import autoRepairAgents, { pack as autoRepairPack } from './auto-repair.js'
//   import carWashAgents, { pack as carWashPack } from './car-wash.js'
//   import rentalCarAgents, { pack as rentalCarPack } from './rental-car.js'
//   import medicalPracticeAgents, { pack as medicalPracticePack } from './medical-practice.js'
//   import pharmacyAgents, { pack as pharmacyPack } from './pharmacy.js'
//   import photographerAgents, { pack as photographerPack } from './photographer.js'
//   import architectureFirmAgents, { pack as architectureFirmPack } from './architecture-firm.js'
// ...then spread each into `agents` and `packs` below.

export const agents = [...coffeeShopAgents]

export const packs = [coffeeShopPack]

export function agentsForIndustry(slug) {
  return agents.filter((a) => a.industry === slug)
}
