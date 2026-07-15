import PromptBlock from './PromptBlock'
import DataNote from './DataNote'
import BlobBadge from './BlobBadge'

// Cycle badge colors by step number so a run of steps feels hand-placed, not repetitive.
const BADGE_COLORS = ['peach', 'mint', 'butter']

export default function StepCard({ step, isLast }) {
  const colorIndex = (Number(step.number) - 1 + BADGE_COLORS.length) % BADGE_COLORS.length
  const badgeColor = BADGE_COLORS[colorIndex] || 'peach'

  return (
    <div className={`flex gap-4 sm:gap-6 ${!isLast ? 'step-connector' : ''} pb-10`}>
      <BlobBadge n={step.number} color={badgeColor} size={52} />
      <div className="flex-1 min-w-0 pt-1">
        <h3 className="font-[--font-display] font-semibold text-lg sm:text-xl text-ink mb-2 leading-snug">
          {step.title}
        </h3>
        <p className="text-ink-soft leading-relaxed text-[15px]">
          {step.description}
        </p>
        {step.dataNote && <DataNote>{step.dataNote}</DataNote>}
        {step.prompt && <PromptBlock prompt={step.prompt} />}
      </div>
    </div>
  )
}
