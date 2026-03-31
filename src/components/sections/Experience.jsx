import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'
import { Pill } from '../ui/Pill'
import { experiences } from '../../data/experience'

const ACCENT_BARS = {
  teal:   'linear-gradient(180deg, #0C8C6F, #10B892)',
  coral:  'linear-gradient(180deg, #E25D3A, #F07A5C)',
  indigo: 'linear-gradient(180deg, #4F5BD5, #6C75E1)',
}

export function Experience() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-10" id="experience">

      <SectionTag label="Experience" variant="coral" />
      <FadeIn>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
          tracking-[-0.025em] leading-[1.18] mb-2">
          Where I've built things<br />that matter.
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-[1.02rem] text-gray-500 font-light leading-[1.85]
          max-w-[540px] mb-12">
          Three companies, three different problem spaces — each one pushed me to grow.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.id} delay={i * 100}>
            <div
              className="bg-white border border-gray-100 rounded-2xl
                grid grid-cols-1 md:grid-cols-[190px_1fr] gap-0 md:gap-9
                transition-all duration-300 hover:-translate-y-0.5
                hover:border-gray-200 relative overflow-hidden"
            >
              {/* Left accent bar */}
              <span
                className="absolute top-0 left-0 bottom-0 w-1"
                style={{ background: ACCENT_BARS[exp.accent] }}
              />

              {/* Date / meta */}
              <div className="px-10 pt-9 pb-2 md:pb-9 md:pt-9 md:pl-10">
                <div className="font-mono text-[0.73rem] text-gray-400 leading-[1.7]">
                  {exp.period}
                </div>
                <div className="text-[0.75rem] text-gray-400 mt-1">
                  {exp.location}
                </div>
                {exp.isCurrent && (
                  <div className="inline-flex items-center gap-1.5 bg-teal-light
                    text-teal text-[0.62rem] font-semibold uppercase tracking-[0.08em]
                    px-2.5 py-1 rounded-md mt-3">
                    <span className="w-[5px] h-[5px] rounded-full bg-teal" />
                    Current
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="px-10 md:px-0 md:pr-10 pt-0 md:pt-9 pb-9">
                <div className="font-display text-[1.25rem] font-semibold text-gray-900 mb-0.5">
                  {exp.title}
                </div>
                <div className="text-[0.88rem] text-gray-400 font-medium mb-4">
                  {exp.company}
                </div>
                <p className="text-[0.93rem] text-gray-600 font-light leading-[1.9] mb-4">
                  {exp.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.pills.map((p) => (
                    <Pill key={p.label} label={p.label} variant={p.variant} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  )
}
