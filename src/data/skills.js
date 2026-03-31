export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    accent: 'teal',
    items: [
      { label: 'Python',           core: true  },
      { label: 'Django',           core: true  },
      { label: 'DRF',              core: true  },
      { label: 'FastAPI',          core: false },
      { label: 'Celery',           core: false },
      { label: 'Django Channels',  core: false },
      { label: 'WebSockets',       core: false },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    accent: 'coral',
    items: [
      { label: 'React',       core: true  },
      { label: 'JavaScript',  core: true  },
      { label: 'HTMX',        core: false },
      { label: 'jQuery',      core: false },
      { label: 'Tailwind CSS',core: false },
      { label: 'Bootstrap',   core: false },
      { label: 'HTML / CSS',  core: false },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Caching',
    accent: 'indigo',
    items: [
      { label: 'PostgreSQL', core: true  },
      { label: 'MySQL',      core: false },
      { label: 'Redis',      core: true  },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    accent: 'amber',
    items: [
      { label: 'CI/CD',           core: false },
      { label: 'GitHub Actions',  core: false },
      { label: 'JWT Auth',        core: false },
      { label: 'OAuth',           core: false },
      { label: 'Razorpay',        core: false },
      { label: 'PayPal',          core: false },
      { label: 'Ubuntu',          core: false },
    ],
  },
]
