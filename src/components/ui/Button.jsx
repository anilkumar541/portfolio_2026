const VARIANTS = {
  teal:  'bg-gradient-to-br from-teal to-teal-dark text-white border border-teal-dark shadow-[0_2px_10px_rgba(12,140,111,0.2)] hover:shadow-[0_8px_24px_rgba(12,140,111,0.28)] hover:-translate-y-0.5',
  coral: 'bg-gradient-to-br from-coral to-coral-dark text-white shadow-[0_2px_10px_rgba(226,93,58,0.2)] hover:shadow-[0_8px_24px_rgba(226,93,58,0.28)] hover:-translate-y-0.5',
  ghost: 'bg-white text-gray-700 border border-gray-400 shadow-md hover:border-gray-600 hover:shadow-lg hover:-translate-y-0.5',
  dark:  'bg-white/10 text-white border border-white/15 hover:bg-white/15 hover:-translate-y-0.5',
}

export function Button({
  href,
  variant = 'teal',
  children,
  className = '',
  target,
}) {
  const cls = `inline-flex items-center gap-2 px-[1.85rem] py-3 rounded-xl text-[0.88rem]
    font-semibold transition-all duration-250 cursor-pointer
    ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {children}
      </a>
    )
  }

  return <button className={cls}>{children}</button>
}
