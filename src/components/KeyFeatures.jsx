import { useTranslation } from 'react-i18next'

export default function KeyFeatures({ features }) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('productDetail.keyFeaturesTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('productDetail.keyFeaturesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-500 text-brand-500 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}