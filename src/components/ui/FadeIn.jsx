import { useInView } from '../../hooks/useInView'

export function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
