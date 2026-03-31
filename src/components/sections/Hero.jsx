import { FadeIn } from '../ui/FadeIn'
import { Button } from '../ui/Button'
import { GitHubIcon } from '../ui/Icons'

const STATS = [
  { num: '4+',  label: 'Years Experience', numColor: 'text-teal',         bar: 'linear-gradient(90deg,#0C8C6F,#10B892)' },
  { num: '3',   label: 'Companies Served', numColor: 'text-coral',        bar: 'linear-gradient(90deg,#E25D3A,#F07A5C)' },
  { num: '1',   label: 'Movie Social Platform', numColor: 'text-indigo-brand', bar: 'linear-gradient(90deg,#4F5BD5,#6C75E1)' },
]

const TECH_PILLS = [
  { label: 'Python',      color: 'bg-teal-light      text-teal'        },
  { label: 'Django',      color: 'bg-teal-light      text-teal'        },
  { label: 'React',       color: 'bg-indigo-light    text-indigo-brand'},
  { label: 'PostgreSQL',  color: 'bg-indigo-light    text-indigo-brand'},
  { label: 'Redis',       color: 'bg-coral-light     text-coral'       },
  { label: 'Celery',      color: 'bg-amber-light     text-amber-brand' },
  { label: 'WebSockets',  color: 'bg-plum-light      text-plum'        },
]

function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">

      {/* ① Current role — tall dark card, spans 2 rows */}
      <div
        className="row-span-2 rounded-2xl p-5 flex flex-col justify-between
          border border-white/8 min-h-[180px]"
        style={{ background: 'linear-gradient(150deg,#131318 0%,#1A1A22 100%)' }}
      >
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em]
            text-teal-vivid mb-3">
            Currently at
          </p>
          <p className="text-white font-semibold text-[1rem] leading-tight">
            On Demand GMBH
          </p>
          <p className="text-white/45 text-[0.78rem] mt-1">Full Stack Developer</p>
          <p className="text-white/25 text-[0.7rem] mt-0.5 font-mono">Austria · Remote</p>
        </div>
        <div className="flex items-center gap-2 mt-4 pt-4
          border-t border-white/8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-vivid animate-pulse" />
          <span className="text-[0.72rem] text-teal-vivid font-medium">
            Jan 2024 → Present
          </span>
        </div>
      </div>

      {/* ② Location */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="text-[1.8rem] leading-none mb-2">🇮🇳</div>
        <p className="font-semibold text-gray-900 text-[0.88rem]">Mumbai, India</p>
        <p className="text-[0.7rem] text-gray-400 mt-0.5 font-mono">UTC +5:30</p>
      </div>

      {/* ③ Availability */}
      <div className="bg-teal-light border border-teal/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-teal opacity-40
              animate-ping" />
            <span className="relative rounded-full bg-teal w-2 h-2" />
          </span>
          <span className="text-[0.65rem] font-semibold text-teal uppercase
            tracking-[0.1em]">
            Available
          </span>
        </div>
        <p className="text-[0.88rem] font-semibold text-gray-900">Open to new roles</p>
        <p className="text-[0.7rem] text-gray-500 mt-0.5">Full-time · Freelance</p>
      </div>

      {/* ④ CinemX — full width */}
      <div
        className="col-span-2 rounded-2xl p-5 flex items-center justify-between
          border border-white/8"
        style={{
          background: 'linear-gradient(135deg,#0B1D18 0%,#0F3029 60%,#0C8C6F 100%)',
        }}
      >
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ED4A0] animate-blink" />
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em]
              text-[#7ED4A0]">
              Live project
            </span>
          </div>
          <p className="font-display font-bold text-white text-[1.25rem] leading-none">
            CinemX
          </p>
          <p className="text-white/40 text-[0.72rem] mt-1">
            Social platform · Movie community
          </p>
        </div>
        <a
          href="https://cinemxx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.7rem] text-white/80 hover:text-white
            bg-white/15 hover:bg-white/25 border border-white/20 hover:border-white/40
            px-3 py-1.5 rounded-lg transition-all no-underline flex-shrink-0"
        >
          cinemxx.com ↗
        </a>
      </div>

      {/* ⑤ Tech strip — full width */}
      <div className="col-span-2 bg-white border border-gray-100 rounded-2xl
        px-5 py-4 shadow-sm">
        <p className="font-mono text-[0.62rem] text-gray-400 uppercase tracking-[0.1em]
          mb-3">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {TECH_PILLS.map((t) => (
            <span
              key={t.label}
              className={`font-mono text-[0.68rem] font-medium px-2.5 py-1
                rounded-md ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export function Hero() {
  return (
    <div
      className="border-b border-gray-100"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 70% 20%, rgba(12,140,111,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(226,93,58,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 90% 70%, rgba(79,91,213,0.04) 0%, transparent 60%),
          #FAFAF7
        `,
      }}
    >
      <section className="max-w-[1240px] mx-auto px-8 pt-[100px] pb-[80px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16
          items-center">

          {/* ── Left ── */}
          <div>
            <FadeIn>
              <h1 className="font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold
                leading-[1.08] tracking-[-0.035em] mb-7">
                Full stack developer<br />
                who{' '}
                <span className="bg-gradient-to-br from-teal to-teal-vivid
                  bg-clip-text text-transparent">
                  ships products
                </span>
                ,<br />
                not just{' '}
                <span className="bg-gradient-to-br from-coral to-[#F07A5C]
                  bg-clip-text text-transparent">
                  code.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-[1.05rem] text-gray-500 font-light leading-[1.9]
                max-w-[520px] mb-10">
                I build and maintain scalable web applications end-to-end — from database
                architecture and real-time backends to responsive React frontends. Currently
                working remotely with an Austrian company, and running a live movie social
                platform I built from scratch.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap gap-2.5 mb-11
                sm:flex-row flex-col sm:items-start items-stretch">
                <Button href="#project" variant="teal">See My Work ↓</Button>
                <Button href="https://github.com/anilkumar541" target="_blank" variant="ghost">
                  <GitHubIcon />
                  GitHub
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-100 rounded-2xl px-5 py-4
                      shadow-sm relative overflow-hidden"
                  >
                    <span
                      className="absolute top-0 left-0 right-0 h-0.75"
                      style={{ background: stat.bar }}
                    />
                    <div className={`font-display text-[1.85rem] font-bold
                      leading-none ${stat.numColor}`}>
                      {stat.num}
                    </div>
                    <div className="text-[0.65rem] font-medium text-gray-400 uppercase
                      tracking-widest mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Bento ── */}
          <FadeIn delay={250} className="hidden lg:block">
            <BentoGrid />
          </FadeIn>

        </div>
      </section>
    </div>
  )
}
