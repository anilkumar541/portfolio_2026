const VARIANTS = {
  teal:   'bg-teal-light   text-teal',
  coral:  'bg-coral-light  text-coral',
  indigo: 'bg-indigo-light text-indigo-brand',
  amber:  'bg-amber-light  text-amber-brand',
  plum:   'bg-plum-light   text-plum',
}

export function SectionTag({ label, variant = 'teal' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium
        uppercase tracking-[0.14em] px-3 py-1.5 rounded-lg mb-4 ${VARIANTS[variant]}`}
    >
      {label}
    </div>
  )
}
