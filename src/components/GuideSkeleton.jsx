export default function GuideSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 sm:p-7 h-full">
      <div className="skeleton h-6 w-24 mb-5 rounded-full" />
      <div className="skeleton h-7 w-full mb-2" />
      <div className="skeleton h-7 w-3/4 mb-4" />
      <div className="skeleton h-4 w-full mb-2" />
      <div className="skeleton h-4 w-5/6 mb-5" />
      <div className="flex gap-2 mb-5">
        <div className="skeleton h-6 w-20 rounded-full" />
        <div className="skeleton h-6 w-16 rounded-full" />
      </div>
      <div className="skeleton h-5 w-28" />
    </div>
  )
}
