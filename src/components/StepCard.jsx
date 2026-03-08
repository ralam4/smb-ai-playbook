import PromptBlock from './PromptBlock'
import DataNote from './DataNote'

export default function StepCard({ step, isLast }) {
  return (
    <div className={`flex gap-5 ${!isLast ? 'step-connector' : ''} pb-8`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-light flex items-center justify-center">
        <span className="font-[--font-display] text-xl text-accent">{step.number}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-[--font-display] text-xl text-text-primary mb-2">
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
