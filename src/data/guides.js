import freeGuides from './guides-free'
import architectureFirmGuides from './pro/architecture-firm'
import autoRepairGuides from './pro/auto-repair'
import carWashGuides from './pro/car-wash'
import coffeeShopGuides from './pro/coffee-shop'
import medicalPracticeGuides from './pro/medical-practice'
import pharmacyGuides from './pro/pharmacy'
import photographerGuides from './pro/photographer'
import rentalCarGuides from './pro/rental-car'

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
