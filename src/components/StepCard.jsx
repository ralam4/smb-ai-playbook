import PromptBlock from './PromptBlock'
import DataNote from './DataNote'

export default function StepCard({ step, isLast }) {
  return (
    <div className={`flex gap-4 sm:gap-6 ${!isLast ? 'step-connector' : ''} pb-10`}>
      <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-accent flex items-center justify-center shadow-sm">
        <span className="font-[--font-display] text-lg sm:text-xl text-white">{step.number}</span>
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <h3 className="font-[--font-display] text-lg sm:text-xl text-text-primary mb-2 leading-snug">
          {step.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-[15px]">
          {step.description}
        </p>
        {step.dataNote && <DataNote>{step.dataNote}</DataNote>}
        {step.prompt && <PromptBlock prompt={step.prompt} />}
      </div>
    </div>
  )
}
