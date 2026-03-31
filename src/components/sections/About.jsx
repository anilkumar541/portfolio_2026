import { FadeIn } from '../ui/FadeIn'
import { SectionTag } from '../ui/SectionTag'

const VALUES = [
  {
    icon: '🧱',
    title: 'Build to Last',
    desc: 'I write code that the next developer can actually read. Clean architecture, clear naming, documented decisions.',
    bar: '#0C8C6F',
    iconBg: 'bg-teal-light',
  },
  {
    icon: '🚢',
    title: 'Ship & Iterate',
    desc: "Get it to production, then improve. I'd rather have a working feature with a plan than a perfect spec with no code.",
    bar: '#E25D3A',
    iconBg: 'bg-coral-light',
  },
  {
    icon: '🔍',
    title: 'Sweat the Details',
    desc: 'API error messages matter. Loading states matter. The last 10% of polish is what separates good from great.',
    bar: '#4F5BD5',
    iconBg: 'bg-indigo-light',
  },
  {
    icon: '🤝',
    title: 'Own the Outcome',
    desc: "I don't just close tickets. I care whether the thing I built actually solves the problem it was meant to solve.",
    bar: '#D4940C',
    iconBg: 'bg-amber-light',
  },
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Understand',
    desc: 'I start with the problem, not the solution. What does the user need? What does the business need? Where are the edges?',
    numColor: 'text-teal-vivid',
  },
  {
    num: '02',
    title: 'Architect',
    desc: "Database models, API contracts, component structure. I plan the system before writing a line — but stay flexible when things change.",
    numColor: 'text-coral',
  },
  {
    num: '03',
    title: 'Build',
    desc: "Backend and frontend in parallel. I'm comfortable owning the full stack — from Django serializers to React state management.",
    numColor: 'text-indigo-brand',
  },
  {
    num: '04',
    title: 'Ship & Monitor',
    desc: "Deploy with CI/CD, watch logs, fix what breaks. A feature isn't done when the PR merges — it's done when users are happy.",
    numColor: 'text-amber-brand',
  },
]

export function About() {
  return (
    <section className="max-w-[1240px] mx-auto px-8 py-6" id="about">

      {/* Top grid: text + value cards */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-[4.5rem]
        items-start">

        {/* Left: text */}
        <FadeIn>
          <SectionTag label="About Me" variant="teal" />
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold
            tracking-[-0.025em] leading-[1.18] mb-3">
            I care about the<br />whole picture.
          </h2>
          <p className="text-[1.02rem] text-gray-500 font-light leading-[1.85]
            max-w-[540px] mb-14" />

          <div className="space-y-5 text-[0.98rem] text-gray-600 font-light leading-[1.95]">
            <p>
              I'm <strong className="text-gray-900 font-semibold">Anil Kumar</strong>, a
              full stack developer based in{' '}
              <strong className="text-gray-900 font-semibold">Mumbai, India</strong>. I've
              been building web applications professionally for over four years — and what
              I enjoy most is owning a feature from the database layer all the way to what
              the user sees on screen.
            </p>
            <p>
              My core stack is{' '}
              <strong className="text-gray-900 font-semibold">
                Django + Django REST Framework
              </strong>{' '}
              on the backend and{' '}
              <strong className="text-gray-900 font-semibold">React</strong> on the
              frontend, backed by{' '}
              <strong className="text-gray-900 font-semibold">PostgreSQL</strong>,{' '}
              <strong className="text-gray-900 font-semibold">Redis</strong>, and{' '}
              <strong className="text-gray-900 font-semibold">Celery</strong> for anything
              that needs to be fast, queued, or real-time.
            </p>
            <p>
              I've worked across healthcare platforms, content management systems, and
              AI-powered document processing — but the project I'm most proud of is{' '}
              <strong className="text-gray-900 font-semibold">CinemX</strong>, a full
              social platform for movie fans that I designed, built, and deployed entirely
              on my own. It's live at{' '}
              <strong className="text-gray-900 font-semibold">cinemxx.com</strong>.
            </p>
          </div>
        </FadeIn>

        {/* Right: value cards */}
        <FadeIn delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white border border-gray-100 rounded-2xl p-6
                  shadow-sm relative overflow-hidden transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg group"
              >
                {/* Left accent bar */}
                <span
                  className="absolute top-0 left-0 bottom-0 w-[3.5px] rounded-r-sm"
                  style={{ background: val.bar }}
                />
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                  text-xl mb-3.5 ${val.iconBg}`}>
                  {val.icon}
                </div>
                <div className="font-semibold text-[0.9rem] text-gray-900 mb-1.5">
                  {val.title}
                </div>
                <div className="text-[0.8rem] text-gray-500 font-light leading-[1.75]">
                  {val.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Process strip */}
      <FadeIn>
        <div
          className="rounded-2xl p-[3.5rem] mt-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #19191A 0%, #252528 100%)',
          }}
        >
          {/* Decorative glow */}
          <span
            className="pointer-events-none absolute right-[-100px] top-[-100px]
              w-[350px] h-[350px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(12,140,111,0.15), transparent 70%)',
            }}
          />

          <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold
            text-white tracking-[-0.025em]">
            How I work
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-9 relative z-10">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num}>
                <div className={`font-mono text-[0.65rem] font-medium tracking-[0.05em]
                  mb-3 flex items-center gap-3 ${step.numColor}`}>
                  {step.num}
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="flex-1 h-px bg-white/10" />
                  )}
                </div>
                <div className="font-semibold text-[0.95rem] text-white mb-1.5">
                  {step.title}
                </div>
                <div className="text-[0.8rem] text-white/40 font-light leading-[1.8]">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

    </section>
  )
}
