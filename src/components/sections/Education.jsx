import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'
import { education } from '../../data/education'

export function Education() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-10" id="education">

      <SectionTag label="Education" variant="plum" />
      <FadeIn>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
          tracking-[-0.025em] leading-[1.18] mb-2">
          Background
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-[1.02rem] text-gray-500 font-light leading-[1.85]
          max-w-[540px] mb-12">
          The foundation everything was built on.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="flex flex-wrap gap-5">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border border-gray-100 rounded-2xl
                px-[1.85rem] py-[1.6rem] flex-1 min-w-[260px] shadow-sm
                relative overflow-hidden"
            >
              <span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6, #A78BFA)',
                }}
              />
              <div className="font-mono text-[0.68rem] font-medium text-plum
                bg-plum-light px-2 py-[0.2rem] rounded-[5px] inline-block mb-3">
                {edu.year}
              </div>
              <div className="font-semibold text-[0.95rem] text-gray-900 mb-1">
                {edu.title}
              </div>
              <div className="text-[0.82rem] text-gray-400 font-normal">
                {edu.subtitle}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

    </section>
  )
}
