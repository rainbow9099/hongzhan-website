import { useTranslation } from 'react-i18next'

export default function PackagingCustomization({ packaging, onInquiry }) {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-brand-500 text-white flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('productDetail.packagingTitle')}</h3>
            <dl className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <dt className="text-gray-500">{t('productDetail.packagingType')}</dt>
                <dd className="font-medium text-gray-900">{packaging.type}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <dt className="text-gray-500">{t('productDetail.packagingMoq')}</dt>
                <dd className="font-medium text-gray-900">{packaging.moq}</dd>
              </div>
              <div className="flex justify-between items-center py-2">
                <dt className="text-gray-500">{t('productDetail.packagingShipping')}</dt>
                <dd className="font-medium text-gray-900">{t('productDetail.packagingShippingValue')}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-gradient-to-br from-brand-50 to-orange-50 rounded-2xl p-8 border border-brand-100">
            <div className="w-14 h-14 rounded-xl bg-brand-500 text-white flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('productDetail.customizationTitle')}</h3>
            <p className="text-gray-600 mb-4">
              {t('productDetail.customizationDesc')}
            </p>
            <ul className="space-y-2 mb-6">
              {packaging.customization.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-all"
            >
              {t('productDetail.requestCustomQuote')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}