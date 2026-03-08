import { Link } from 'react-router-dom'

export default function GuideCard({ guide, className = '' }) {
  return (
    <Link
      to={`/guide/${guide.slug}`}
      className={`group block bg-surface rounded-xl border border-border p-6 no-underline transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:border-l-accent hover:border-l-3 ${className}`}
    >
      <span
        className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white mb-4"
        style={{ backgroundColor: guide.tagColor }}
      >
        {guide.tag}
      </span>
      <h3 className="font-[--font-display] text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
        {guide.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {guide.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-text-secondary">
        <span className="px-2 py-0.5 rounded-full bg-accent-light/60 text-accent font-medium">
          {guide.difficulty}
        </span>
        <span>{guide.time}</span>
      </div>
      <span className="inline-block mt-4 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
        Open Guide &rarr;
      </span>
    </Link>
  )
}
