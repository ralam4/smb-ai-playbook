import { useState } from 'react'

export default function PromptBlock({ prompt }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="prompt-block relative mt-5 rounded-xl border border-border/80 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F0EDE8] border-b border-border/60">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[11px] font-[--font-mono] font-medium uppercase tracking-wider text-accent">
            Prompt
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`text-xs font-[--font-mono] font-medium px-3 py-1 rounded-md border transition-all cursor-pointer ${
            copied
              ? 'bg-accent text-white border-accent'
              : 'bg-white border-border text-text-secondary hover:text-accent hover:border-accent'
          }`}
        >
          {copied ? 'Copied \u2713' : 'Copy'}
        </button>
      </div>
      <pre className="font-[--font-mono] text-[13px] leading-relaxed p-4 sm:p-5 whitespace-pre-wrap select-text text-text-primary/85 bg-[#F8F6F3] overflow-x-auto">
        {prompt}
      </pre>
    </div>
  )
}
