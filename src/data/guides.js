import freeGuides from './guides-free.js'
import architectureFirmGuides from './pro/architecture-firm.js'
import autoRepairGuides from './pro/auto-repair.js'
import carWashGuides from './pro/car-wash.js'
import coffeeShopGuides from './pro/coffee-shop.js'
import medicalPracticeGuides from './pro/medical-practice.js'
import pharmacyGuides from './pro/pharmacy.js'
import photographerGuides from './pro/photographer.js'
import rentalCarGuides from './pro/rental-car.js'

export const proGuides = [
  ...architectureFirmGuides,
  ...autoRepairGuides,
  ...carWashGuides,
  ...coffeeShopGuides,
  ...medicalPracticeGuides,
  ...pharmacyGuides,
  ...photographerGuides,
  ...rentalCarGuides,
]

const guides = [...freeGuides, ...proGuides]

export { freeGuides }
export default guides
