import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'

const CONTACT_CARDS = [
  {
    href: 'mailto:anilec4870@gmail.com',
    icon: '✉️',
    iconBg: 'bg-teal/15',
    borderHover: 'hover:border-teal',
    label: 'Email',
    value: 'anilec4870@gmail.com',
  },
  {
    href: 'tel:+917897488677',
    icon: '📱',
    iconBg: 'bg-coral/12',
    borderHover: 'hover:border-coral',
    label: 'Phone',
    value: '+91 789 748 8677',
  },
  {
    href: 'https://linkedin.com/in/anil-kumar-904280170',
    icon: '💼',
    iconBg: 'bg-indigo-brand/12',
    borderHover: 'hover:border-indigo-brand',
    label: 'LinkedIn',
    value: 'anil-kumar',
    external: true,
  },
  {
    href: 'https://github.com/anilkumar541',
    icon: '🐙',
    iconBg: 'bg-amber-brand/12',
    borderHover: 'hover:border-amber-brand',
    label: 'GitHub',
    value: 'anilkumar541',
    external: true,
  },
]

export function Contact() {
  return (
    <div
      id="contact"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 30% 40%, rgba(12,140,111,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 80% 60%, rgba(226,93,58,0.06) 0%, transparent 60%),
          #19191A
        `,
      }}
    >
      <section className="max-w-[1240px] mx-auto px-8 py-[2.5rem] text-center text-white">

        <FadeIn>
          <div className="flex justify-center">
            <SectionTag label="Get In Touch" variant="teal" />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
            text-white tracking-[-0.025em] leading-[1.18] mb-2">
            Let's build something<br />great together.
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-[1.02rem] text-white/40 font-light max-w-[480px]
            mx-auto mb-12 leading-[1.85]">
            Open to full-time roles, freelance projects, and interesting
            collaborations.<br />I reply within 24 hours.
          </p>
        </FadeIn>

        {/* Contact cards */}
        <FadeIn delay={250}>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className={`bg-white/4 border border-white/7 rounded-xl
                  px-[1.85rem] py-[1.35rem] text-white flex items-center gap-4
                  min-w-[230px] transition-all duration-300 no-underline
                  hover:bg-white/8 hover:-translate-y-0.5
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${card.borderHover}`}
              >
                <div className={`w-[42px] h-[42px] rounded-[11px] flex items-center
                  justify-center text-[1.1rem] flex-shrink-0 ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div className="text-left">
                  <div className="text-[0.67rem] text-white/30 uppercase tracking-[0.1em]
                    font-medium">
                    {card.label}
                  </div>
                  <div className="text-[0.88rem] font-normal mt-0.5">
                    {card.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>


      </section>
    </div>
  )
}
