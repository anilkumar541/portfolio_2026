import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'
import { skillGroups } from '../../data/skills'

const DOT_COLOR = {
  teal:   'bg-teal',
  coral:  'bg-coral',
  indigo: 'bg-indigo-brand',
  amber:  'bg-amber-brand',
}

const TOP_BAR = {
  teal:   'linear-gradient(90deg, #0C8C6F, #10B892)',
  coral:  'linear-gradient(90deg, #E25D3A, #F07A5C)',
  indigo: 'linear-gradient(90deg, #4F5BD5, #6C75E1)',
  amber:  'linear-gradient(90deg, #D4940C, #E8AE30)',
}

export function Skills() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-10" id="skills">

      <SectionTag label="Skills" variant="indigo" />
      <FadeIn>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
          tracking-[-0.025em] leading-[1.18] mb-2">
          What I bring to<br />the table.
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-[1.02rem] text-gray-500 font-light leading-[1.85]
          max-w-[540px] mb-12">
          Core technologies bolded — these are what I reach for first and know deepest.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white border border-gray-100 rounded-2xl p-[1.85rem]
                shadow-sm relative overflow-hidden"
            >
              <span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: TOP_BAR[group.accent] }}
              />
              <div className="flex items-center gap-2.5 mb-4">
                <span className={`w-2.5 h-2.5 rounded-[3px] ${DOT_COLOR[group.accent]}`} />
                <span className="font-semibold text-[0.82rem] uppercase tracking-[0.08em]
                  text-gray-500">
                  {group.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className={`text-[0.84rem] px-[0.95rem] py-[0.42rem] rounded-[10px]
                      border transition-all duration-200 cursor-default
                      hover:shadow-sm hover:bg-white
                      ${item.core
                        ? 'font-semibold text-gray-900 bg-white border-gray-200 hover:border-gray-300'
                        : 'font-normal text-gray-700 bg-gray-50 border-gray-100 hover:border-gray-200'
                      }`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

    </section>
  )
}
