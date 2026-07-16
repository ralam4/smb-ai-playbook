import architectureFirmAgents, { pack as architectureFirmPack } from './architecture-firm.js'
import autoRepairAgents, { pack as autoRepairPack } from './auto-repair.js'
import carWashAgents, { pack as carWashPack } from './car-wash.js'
import coffeeShopAgents, { pack as coffeeShopPack } from './coffee-shop.js'
import medicalPracticeAgents, { pack as medicalPracticePack } from './medical-practice.js'
import pharmacyAgents, { pack as pharmacyPack } from './pharmacy.js'
import photographerAgents, { pack as photographerPack } from './photographer.js'
import rentalCarAgents, { pack as rentalCarPack } from './rental-car.js'

export const agents = [
  ...architectureFirmAgents,
  ...autoRepairAgents,
  ...carWashAgents,
  ...coffeeShopAgents,
  ...medicalPracticeAgents,
  ...pharmacyAgents,
  ...photographerAgents,
  ...rentalCarAgents,
]

export const packs = [
  architectureFirmPack,
  autoRepairPack,
  carWashPack,
  coffeeShopPack,
  medicalPracticePack,
  pharmacyPack,
  photographerPack,
  rentalCarPack,
]

export function agentsForIndustry(slug) {
  return agents.filter((a) => a.industry === slug)
}
