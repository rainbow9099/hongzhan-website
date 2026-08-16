import { useTranslation } from 'react-i18next'

const useCaseKeys = [
  {
    titleKey: 'useCases.training.title',
    subKey: 'useCases.training.subtitle',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    link: '#training',
  },
  {
    titleKey: 'useCases.tournaments.title',
    subKey: 'useCases.tournaments.subtitle',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80',
    link: '#tournaments',
  },
  {
    titleKey: 'useCases.clubs.title',
    subKey: 'useCases.clubs.subtitle',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80',
    link: '#clubs',
  },
]

export default function UseCases() {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('useCases.title')}</h2>
          <p className="section-subtitle">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {useCaseKeys.map((uc, index) => (
            <a
              key={uc.titleKey}
              href={uc.link}
              className={`group relative block overflow-hidden rounded-2xl h-64 md:h-80 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={uc.image}
                  alt={t(uc.titleKey)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/50 to-transparent" />

              <div className="relative z-10 h-full flex items-center p-8 md:p-12">
                <div className="max-w-md text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">{t(uc.titleKey)}</h3>
                  <p className="text-white/80 mb-6">{t(uc.subKey)}</p>
                  <span className="inline-flex items-center text-brand-400 font-semibold group-hover:text-brand-300 transition-colors">
                    {t('useCases.exploreGear')}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}