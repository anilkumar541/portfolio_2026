export const cinemxProject = {
  name: 'CinemX',
  subtitle: 'A social platform for movie fans — Twitter meets IMDb.',
  url: 'https://cinemxx.com',
  description:
    "CinemX is a full-stack movie community platform I designed, built, and deployed independently. It combines social features (posts, hashtags, group chat, push notifications) with entertainment data (live box office, OTT releases, upcoming movies) and a machine-learning personalized feed. The entire system — scraping pipelines, payment subscriptions, WebSocket real-time layer, news aggregation, and auth security — is production-grade and running live.",
  features: [
    {
      emoji: '🕷️',
      name: 'Box Office Scraper',
      info: 'Dual-source automated scraper (Playwright + BeautifulSoup) with anti-detection, exponential backoff, and Celery Beat scheduling.',
      accent: 'teal',
    },
    {
      emoji: '🎯',
      name: 'ML-Powered Feed',
      info: 'Hybrid recommendation engine — scikit-learn collaborative filtering + hashtag interest profiles + real-time trending scores.',
      accent: 'indigo',
    },
    {
      emoji: '⚡',
      name: 'Real-Time WebSockets',
      info: 'Push notifications and group chat via Django Channels + Redis channel layer with httpOnly JWT cookie auth.',
      accent: 'coral',
    },
    {
      emoji: '💳',
      name: 'Payment Subscriptions',
      info: 'Razorpay integration with Celery-managed lifecycle: auto-renewal, grace period, retry logic, invoice PDF generation.',
      accent: 'amber',
    },
    {
      emoji: '📰',
      name: 'News Aggregation',
      info: 'Automated RSS pipeline from 6 live entertainment sources with deduplication and scheduled Celery Beat cleanup.',
      accent: 'plum',
    },
    {
      emoji: '🔒',
      name: 'Security Layer',
      info: 'httpOnly JWT cookies (XSS-safe), Google OAuth, email verification, token blacklisting, magic-byte file validation.',
      accent: 'teal-dark',
    },
  ],
  tech: [
    { label: 'Python',                  variant: 'teal'   },
    { label: 'Django',                  variant: 'teal'   },
    { label: 'Django REST Framework',   variant: 'teal'   },
    { label: 'React 19',                variant: 'indigo' },
    { label: 'PostgreSQL',              variant: 'indigo' },
    { label: 'Redis',                   variant: 'coral'  },
    { label: 'Celery',                  variant: 'coral'  },
    { label: 'Django Channels',         variant: 'amber'  },
    { label: 'Playwright',              variant: 'amber'  },
    { label: 'scikit-learn',            variant: 'gray'   },
    { label: 'Razorpay',                variant: 'gray'   },
    { label: 'unittest',                variant: 'gray'   },
  ],
}
