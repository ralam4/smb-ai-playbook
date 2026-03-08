import { useState } from 'react'

export default function PromptBlock({ prompt }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative mt-4 rounded-lg border-l-3 border-accent bg-[#F8F6F3]">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs font-[--font-mono] px-2.5 py-1 rounded bg-white border border-border text-text-secondary hover:text-accent hover:border-accent transition-all cursor-pointer"
      >
        {copied ? 'Copied \u2713' : 'Copy prompt'}
      </button>
      <pre className="font-[--font-mono] text-sm leading-relaxed p-5 pr-28 whitespace-pre-wrap select-text text-text-primary/90 overflow-x-auto">
        {prompt}
      </pre>
    </div>
  )
}
