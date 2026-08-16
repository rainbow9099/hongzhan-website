import { useTranslation } from 'react-i18next'

export default function Specifications({ specs, downloads }) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('productDetail.specsTitle')}
          </h2>
          <p className="text-gray-600">
            {t('productDetail.specsDesc')}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {Object.entries(specs).map(([key, value], idx) => (
              <div
                key={key}
                className={`p-6 ${idx >= 4 ? 'border-t border-gray-100' : ''} ${
                  idx % 4 !== 0 && idx < 4 ? '' : ''
                }`}
              >
                <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {key}
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {Array.isArray(value) ? (
                    <span className="flex flex-wrap gap-1.5">
                      {value.map((v) => (
                        <span
                          key={v}
                          className="inline-block px-2.5 py-0.5 bg-gray-100 rounded-md text-sm"
                        >
                          {v}
                        </span>
                      ))}
                    </span>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </div>
        </div>

        {downloads && downloads.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t('productDetail.downloadResources')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {downloads.map((dl) => (
                <a
                  key={dl.name}
                  href="#"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{dl.name}</p>
                    <p className="text-xs text-gray-500">{dl.size}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}