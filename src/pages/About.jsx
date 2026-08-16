import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

export default function About() {
  const { t } = useTranslation()

  const milestones = [
    { key: 'founded', icon: '🎯' },
    { key: 'firstApproval', icon: '🏆' },
    { key: 'globalExpansion', icon: '🌍' },
    { key: 'oemLaunched', icon: '🔧' },
    { key: 'tenTCustomers', icon: '📈' },
    { key: 'newFacility', icon: '🏭' },
  ]

  const values = [
    {
      key: 'qualityFirst',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      key: 'innovationDriven',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      key: 'customerCentric',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      key: 'sustainable',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ]

  const certs = [
    { key: 'usapa', icon: '🏅' },
    { key: 'iso', icon: '📋' },
    { key: 'ce', icon: '🇪🇺' },
    { key: 'rohs', icon: '🌿' },
    { key: 'bsci', icon: '🔍' },
    { key: 'sgs', icon: '🧪' },
  ]

  const teamMembers = [
    { key: 'david', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    { key: 'sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { key: 'michael', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { key: 'emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      <Breadcrumb
        items={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: t('nav.about') },
        ]}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-700 mb-4">
              {t('about.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{t('about.subtitle')}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/products" className="btn-primary">
                {t('about.exploreProducts')}
              </Link>
              <Link to="/contact" className="btn-outline">
                {t('about.startPartnership')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: t('about.yearsExperience') },
              { value: '500+', label: t('about.globalCustomers') },
              { value: '80+', label: t('about.countriesServed') },
              { value: '200+', label: t('about.skusCustom') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                {t('about.section.ourStory')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {t('about.storyTitle')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=80"
                  alt="PeakSports facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
                <div className="text-3xl font-bold text-brand-600">15+</div>
                <div className="text-sm text-gray-600">{t('about.teamMembers')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {t('about.section.ourValues')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t('about.valuesTitle')}
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.key}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-brand-50 hover:shadow-lg transition group"
              >
                <div className="text-brand-600 mb-4 group-hover:text-brand-700">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(`about.${v.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`about.${v.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {t('about.section.ourJourney')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t('about.milestonesTitle')}
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.key}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    <div className={`bg-white rounded-xl p-6 shadow-sm inline-block ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                      <div className="text-2xl font-bold text-brand-600 mb-1">
                        {t(`about.milestones.${m.key}.year`)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {t(`about.milestones.${m.key}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm max-w-xs">
                        {t(`about.milestones.${m.key}.desc`)}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-xl flex-shrink-0 relative z-10">
                    {m.icon}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {t('about.section.certifications')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t('about.certificationsTitle')}
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('about.certifiedDesc')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certs.map((c) => (
              <div
                key={c.key}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-brand-50 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">
                  {t(`about.certs.${c.key}.name`)}
                </div>
                <div className="text-gray-500 text-xs">
                  {t(`about.certs.${c.key}.desc`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
              {t('about.section.ourTeam')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t('about.teamTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((m) => (
              <div key={m.key} className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                  <img
                    src={m.avatar}
                    alt={t(`about.team.${m.key}.name`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900">{t(`about.team.${m.key}.name`)}</h3>
                <p className="text-gray-600 text-sm">{t(`about.team.${m.key}.role`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.ctaTitle')}
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            {t('about.ctaSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-white">
              {t('about.submitInquiry')}
            </Link>
            <a
              href="mailto:kxiaoxiaole@gmail.com"
              className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-brand-600 transition"
            >
              {t('about.emailDirectly')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}