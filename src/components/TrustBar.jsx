import { useTranslation } from 'react-i18next'

const statKeys = [
  { value: '50+', key: 'trust.countriesServed' },
  { value: '10K+', key: 'trust.globalCustomers' },
  { value: '30+', key: 'trust.productSkus' },
  { value: 'ISO', key: 'trust.certifiedQuality' },
  { value: '24/7', key: 'trust.quickResponse' },
]

export default function TrustBar() {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {statKeys.map((stat) => (
            <div
              key={stat.key}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-brand-500 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-500 font-medium">
                {t(stat.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}