const VARIANTS = {
  teal:   'bg-teal-light   text-teal',
  coral:  'bg-coral-light  text-coral',
  indigo: 'bg-indigo-light text-indigo-brand',
  amber:  'bg-amber-light  text-amber-brand',
  plum:   'bg-plum-light   text-plum',
  gray:   'bg-gray-50      text-gray-500',
}

export function Pill({ label, variant = 'gray' }) {
  return (
    <span
      className={`font-mono text-[0.65rem] font-medium px-[0.7rem] py-[0.28rem]
        rounded-md tracking-[0.02em] ${VARIANTS[variant]}`}
    >
      {label}
    </span>
  )
}
