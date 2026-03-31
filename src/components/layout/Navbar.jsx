import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#project',    label: 'Project'    },
  { href: '#skills',     label: 'Skills'     },
]

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-site-bg/90 backdrop-blur-md shadow-[0_1px_0_#EAEAE6]'
          : ''
        }`}
    >
      <nav className="max-w-[1240px] mx-auto px-8 flex items-center justify-between h-[62px]">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-1.5 font-display text-[1.2rem] font-bold
            tracking-[-0.02em] text-gray-900 no-underline"
        >
          <span className="w-2 h-2 rounded-full bg-teal" />
          Anil Kumar
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.82rem] font-medium text-gray-500 hover:text-gray-900
                  transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.82rem] font-semibold text-white bg-gradient-to-br
                from-teal to-teal-dark px-5 py-[0.55rem] rounded-[10px]
                shadow-[0_2px_8px_rgba(12,140,111,0.2)]
                hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(12,140,111,0.3)]
                transition-all no-underline"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none
            cursor-pointer z-[52]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 rounded transition-all duration-300
              ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 rounded transition-all duration-300
              ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-900 rounded transition-all duration-300
              ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-site-bg flex flex-col items-center
            justify-center gap-8 z-[51]"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-xl font-medium text-gray-700 no-underline
                hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="text-xl font-semibold text-white bg-gradient-to-br
              from-teal to-teal-dark px-8 py-3 rounded-xl no-underline"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
