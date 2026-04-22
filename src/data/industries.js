const industries = [
  {
    slug: 'architecture-firm',
    name: 'Architecture Firm',
    color: '#4A5568',
    tagline: 'AI playbooks for principals, project managers, and studio owners.',
    description:
      'Practical guides for architecture firms — from code research and plan check responses to winning government contracts and auditing project profitability. Built for firms of 5 to 50 people where one person wears many hats.',
    whoFor: 'Principals, project architects, and studio managers running small-to-mid-sized firms.',
    painPoints: [
      'Hours lost to manual code research and plan check responses',
      'Projects that look profitable but lose money during CA',
      'RFPs and government bids that require specialized language',
      'Scope creep that erodes margins quietly',
    ],
  },
  {
    slug: 'medical-practice',
    name: 'Medical Practice',
    color: '#1D4ED8',
    tagline: 'AI playbooks for practice managers and independent clinicians.',
    description:
      'AI guides tailored for small medical practices — no-show reduction, referral workflows, patient communication, and insurance authorization. Built for independent practices and small clinics that need systems without an IT department.',
    whoFor: 'Practice managers, office administrators, and independent clinicians.',
    painPoints: [
      'No-shows and cancellations that empty your schedule',
      'Referrals that fall through the cracks',
      'Patient communication that eats your staff’s day',
      'Insurance denials and pre-auth delays that slow cash flow',
    ],
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair Shop',
    color: '#DC2626',
    tagline: 'AI playbooks for shop owners and service managers.',
    description:
      'Operational guides for independent auto repair shops — bay utilization, estimate communication, parts ordering, and repeat customer systems. Built for 1-to-10 bay shops where the owner is still turning wrenches.',
    whoFor: 'Shop owners, service writers, and service managers.',
    painPoints: [
      'Bays sitting idle while customers wait weeks',
      'Customers who don’t trust the estimate and decline work',
      'Repeat customers you’re losing to dealerships',
      'Parts ordering and inventory that drains hours every week',
    ],
  },
  {
    slug: 'car-wash',
    name: 'Car Wash',
    color: '#0EA5E9',
    tagline: 'AI playbooks for express, flex-serve, and full-service operators.',
    description:
      'Guides for single-location and small-chain car wash operators — membership program design, demand planning, upsell systems, and staffing. Built for operators who know every car in the line but don’t have time to pull the data.',
    whoFor: 'Owners and general managers of single-site or small-chain car washes.',
    painPoints: [
      'Revenue that swings wildly with the weather',
      'Customers buying the cheapest wash every time',
      'Memberships priced by gut, not math',
      'Staffing mismatched to actual demand',
    ],
  },
  {
    slug: 'pharmacy',
    name: 'Pharmacy',
    color: '#16A34A',
    tagline: 'AI playbooks for independent pharmacists and pharmacy managers.',
    description:
      'Guides for independent pharmacies — taper schedules, compliance tracking, patient counseling documentation, and controlled substance workflows. Built for pharmacists who want to move faster on routine work so they can focus on clinical judgment.',
    whoFor: 'Pharmacists, pharmacy managers, and pharmacy owners.',
    painPoints: [
      'Manual taper calculations that eat clinical time',
      'Compliance changes you need to stay ahead of',
      'Patient counseling docs that nobody reads',
      'Inventory management that drains hours from patient care',
    ],
  },
  {
    slug: 'photographer',
    name: 'Photographer',
    color: '#7C3AED',
    tagline: 'AI playbooks for independent photographers and small studios.',
    description:
      'Business guides for working photographers — pricing, portfolio sites, seasonal marketing, and practical business planning. Built for photographers who are great behind the camera and running the business on nights and weekends.',
    whoFor: 'Independent photographers and owners of small studios (1–4 people).',
    painPoints: [
      'Pricing that feels like guesswork',
      'A portfolio site that doesn’t actually book clients',
      'Slow seasons that kill cash flow',
      'No real business plan beyond "shoot more weddings"',
    ],
  },
  {
    slug: 'rental-car',
    name: 'Rental Car Business',
    color: '#EA580C',
    tagline: 'AI playbooks for independent and regional fleet operators.',
    description:
      'Operational and marketing guides for independent rental car businesses — fleet pricing, turnover operations, OTA vs direct channel strategy, and loyalty programs. Built for operators competing against the majors without their budget.',
    whoFor: 'Owners and general managers of independent or regional rental car operations.',
    painPoints: [
      'Fleet pricing that can’t react to demand fast enough',
      'Turnover and damage tracking on sticky notes',
      'OTA commissions eating your margin',
      'No loyalty system to keep customers booking direct',
    ],
  },
  {
    slug: 'coffee-shop',
    name: 'Coffee Shop',
    color: '#B45309',
    tagline: 'AI playbooks for independent cafe and small chain operators.',
    description:
      'Operational guides for independent cafes — menu pricing, waste reduction, local marketing, and staff scheduling. Built for owners who opened because they love coffee and now need to run a business.',
    whoFor: 'Owners and managers of independent cafes and 1–3 location chains.',
    painPoints: [
      'Menu prices that haven’t kept up with costs',
      'Waste and over-prep that quietly kills margin',
      'Marketing that feels like yelling into Instagram',
      'Staff schedules that don’t match when people actually walk in',
    ],
  },
]

export default industries
