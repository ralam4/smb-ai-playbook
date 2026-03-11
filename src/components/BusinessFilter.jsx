const businesses = [
  { id: 'all', label: 'All', icon: null },
  { id: 'Barbershop', label: 'Barbershop', icon: '\u2702\uFE0F' },
  { id: 'Bakery & Caf\u00E9', label: 'Bakery', icon: '\uD83E\uDD50' },
  { id: 'Medical Practice', label: 'Medical', icon: '\uD83E\uDE7A' },
  { id: 'Pharmacy', label: 'Pharmacy', icon: '\uD83D\uDC8A' },
  { id: 'Photographer', label: 'Photographer', icon: '\uD83D\uDCF7' },
  { id: 'Coffee Shop', label: 'Coffee Shop', icon: '\u2615' },
  { id: 'Graphic Designer', label: 'Designer', icon: '\uD83C\uDFA8' },
  { id: 'Car Wash', label: 'Car Wash', icon: '\uD83D\uDE97' },
  { id: 'Architecture Firm', label: 'Architecture', icon: '\uD83D\uDCD0' },
  { id: 'Auto Repair', label: 'Auto Repair', icon: '\uD83D\uDD27' },
  { id: 'Real Estate Agent', label: 'Real Estate', icon: '\uD83C\uDFE0' },
  { id: 'All Businesses', label: 'Universal', icon: '\u2B50' },
]

const problems = [
  { id: 'all', label: 'All', icon: null },
  { id: 'get-customers', label: 'Get Customers', icon: '\uD83D\uDCE3' },
  { id: 'fix-profits', label: 'Fix Profits', icon: '\uD83D\uDCB0' },
  { id: 'fix-operations', label: 'Fix Operations', icon: '\u2699\uFE0F' },
  { id: 'scale-up', label: 'Scale Up', icon: '\uD83D\uDE80' },
]

export default function BusinessFilter({ activeFilter, onFilterChange, filterMode, onModeChange }) {
  const items = filterMode === 'problem' ? problems : businesses

  return (
    <div className="space-y-4">
      {/* Segmented mode toggle */}
      <div className="inline-flex items-center rounded-lg bg-surface border border-border p-0.5">
        <button
          onClick={() => onModeChange('business')}
          className={`
            relative px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer
            ${filterMode === 'business'
              ? 'bg-text-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
            }
          `}
        >
          By Business
        </button>
        <button
          onClick={() => onModeChange('problem')}
          className={`
            relative px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer
            ${filterMode === 'problem'
              ? 'bg-text-primary text-white shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
            }
          `}
        >
          By Problem
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = activeFilter === item.id
          return (
            <button
              key={item.id}
              onClick={() => onFilterChange(item.id)}
              className={`
                inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
                transition-all duration-200 cursor-pointer border
                ${isActive
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-surface text-text-secondary border-border hover:border-border-strong hover:text-text-primary hover:shadow-sm'
                }
              `}
            >
              {item.icon && <span className="text-base leading-none">{item.icon}</span>}
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
