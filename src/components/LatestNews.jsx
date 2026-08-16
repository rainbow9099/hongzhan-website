import { useTranslation } from 'react-i18next'

const news = [
  {
    categoryKey: 'news.product',
    category: 'Product',
    title: 'New Pro Carbon Paddle Series Launch',
    excerpt: 'Our latest carbon fiber paddle line features enhanced spin technology and improved durability...',
    date: 'Aug 10, 2026',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
  },
  {
    categoryKey: 'news.event',
    category: 'Event',
    title: 'PeakSports at US Open Pickleball Championship',
    excerpt: 'Visit our booth at the US Open and experience our tournament-grade equipment firsthand...',
    date: 'Aug 05, 2026',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=80',
  },
  {
    categoryKey: 'news.tip',
    category: 'Tip',
    title: '5 Essential Pickleball Maintenance Tips',
    excerpt: 'Keep your equipment in top condition with these professional maintenance and care tips...',
    date: 'Jul 28, 2026',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
  },
]

const categoryColor = {
  Product: 'bg-brand-100 text-brand-700',
  Event: 'bg-blue-100 text-blue-700',
  Tip: 'bg-green-100 text-green-700',
}

export default function LatestNews() {
  const { t } = useTranslation()

  return (
    <section id="news" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title mb-2">{t('news.title')}</h2>
            <p className="text-gray-600">{t('news.subtitle')}</p>
          </div>
          <a href="#all-news" className="btn-outline self-start sm:self-auto">
            {t('news.viewAll')}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColor[item.category] || 'bg-gray-100 text-gray-700'}`}>
                  {t(item.categoryKey)}
                </span>
              </div>
              <div className="p-6">
                <time className="text-xs text-gray-400 font-medium">{item.date}</time>
                <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-brand-500 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-brand-500 text-sm font-semibold hover:text-brand-600 transition-colors"
                >
                  {t('news.readMore')}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}