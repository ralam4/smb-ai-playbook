export default function DataNote({ children }) {
  return (
    <div className="mt-4 rounded-lg bg-[#F0F1F4] border border-[#D8DAE0] px-5 py-4">
      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
        Data you need:
      </p>
      <p className="text-sm text-text-primary/80 leading-relaxed">{children}</p>
    </div>
  )
}
