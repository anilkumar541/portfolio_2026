import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'
import { Button } from '../ui/Button'
import { Pill } from '../ui/Pill'
import { GitHubIcon, ExternalLinkIcon } from '../ui/Icons'
import { cinemxProject } from '../../data/projects'

const FEAT_BAR = {
  teal:       'linear-gradient(90deg, #0C8C6F, #10B892)',
  indigo:     'linear-gradient(90deg, #4F5BD5, #6C75E1)',
  coral:      'linear-gradient(90deg, #E25D3A, #F07A5C)',
  amber:      'linear-gradient(90deg, #D4940C, #E8AE30)',
  plum:       'linear-gradient(90deg, #8B5CF6, #A78BFA)',
  'teal-dark':'linear-gradient(90deg, #07705A, #0C8C6F)',
}

export function Project() {
  const p = cinemxProject

  return (
    <section className="max-w-[1240px] mx-auto px-8 py-10" id="project">

      <SectionTag label="Featured Project" variant="plum" />
      <FadeIn>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
          tracking-[-0.025em] leading-[1.18] mb-2">
          Built from zero.<br />Running in production.
        </h2>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-[1.02rem] text-gray-500 font-light leading-[1.85]
          max-w-[540px] mb-12">
          Not a tutorial project. A real product with real users, real infrastructure,
          and serious complexity.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden
          shadow-md">

          {/* Hero banner */}
          <div
            className="relative overflow-hidden px-12 pb-11 pt-12"
            style={{
              background:
                'linear-gradient(135deg, #0B1D18 0%, #0F3029 40%, #0C8C6F 100%)',
            }}
          >
            {/* Decorative blobs */}
            <span
              className="pointer-events-none absolute left-1/2 top-1/2
                w-[500px] h-[500px] rounded-full -translate-x-[30%] -translate-y-[60%]"
              style={{
                background:
                  'radial-gradient(circle, rgba(226,93,58,0.12), transparent 70%)',
              }}
            />
            <span
              className="pointer-events-none absolute right-[-60px] bottom-[-60px]
                w-[250px] h-[250px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(79,91,213,0.15), transparent 70%)',
              }}
            />

            {/* Live badge */}
            <div className="flex items-center gap-2 font-mono text-[0.68rem] uppercase
              tracking-[0.12em] text-[#7ED4A0] mb-4">
              <span className="w-[7px] h-[7px] rounded-full bg-[#7ED4A0] animate-blink" />
              Live in Production
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-[clamp(2rem,3.5vw,3.1rem)] font-bold
                text-white tracking-[-0.025em] mb-1.5">
                {p.name}
              </h3>
              <p className="text-[1.02rem] text-white/50 font-light">{p.subtitle}</p>
            </div>

            {/* URL pill — desktop inline, mobile below */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block absolute top-12 right-12 font-mono text-[0.72rem]
                text-white/80 hover:text-white bg-white/15 hover:bg-white/25
                border border-white/20 hover:border-white/40
                px-3.5 py-1.5 rounded-lg transition-all z-10 no-underline"
            >
              cinemxx.com ↗
            </a>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-block mt-4 font-mono text-[0.72rem]
                text-white/40 bg-white/8 px-3.5 py-1.5 rounded-lg no-underline z-10
                relative"
            >
              cinemxx.com ↗
            </a>
          </div>

          {/* Body */}
          <div className="px-12 py-12">
            <p className="text-[0.98rem] text-gray-600 font-light leading-[1.95]
              max-w-3xl mb-11">
              {p.description}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-11">
              {p.features.map((feat) => (
                <div
                  key={feat.name}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm
                    relative overflow-hidden transition-all duration-250
                    hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: FEAT_BAR[feat.accent] }}
                  />
                  <div className="text-[1.3rem] mb-3">{feat.emoji}</div>
                  <div className="font-semibold text-[0.88rem] text-gray-900 mb-1.5">
                    {feat.name}
                  </div>
                  <div className="text-[0.79rem] text-gray-500 font-light leading-[1.75]">
                    {feat.info}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em]
              text-gray-400 mb-3">
              Built With
            </p>
            <div className="flex flex-wrap gap-1.5 mb-9">
              {p.tech.map((t) => (
                <Pill key={t.label} label={t.label} variant={t.variant} />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button href={p.url} target="_blank" variant="teal">
                Visit Live Site ↗
              </Button>
              <Button
                href="https://github.com/anilkumar541"
                target="_blank"
                variant="ghost"
              >
                <GitHubIcon />
                Source Code
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  )
}
