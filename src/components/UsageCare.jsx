import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function UsageCare({ usage }) {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('productDetail.usageTitle')}
          </h2>
          <p className="text-gray-600">
            {t('productDetail.usageDesc')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {usage.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </span>
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}