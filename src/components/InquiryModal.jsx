import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function InquiryModal({ isOpen, onClose, productId, productName }) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
    quantity: '',
    timeframe: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
      setErrors({})
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = t('inquiry.errors.name')
    if (!formData.country.trim()) errs.country = t('inquiry.errors.country')
    if (!formData.email.trim()) errs.email = t('inquiry.errors.email')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = t('inquiry.errors.emailInvalid')
    if (!formData.message.trim()) errs.message = t('inquiry.errors.message')
    if (!formData.agree) errs.agree = t('inquiry.errors.agree')
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {t('inquiry.thankYou')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('inquiry.thankYouDesc')}
            </p>
            <button onClick={onClose} className="btn-primary">
              {t('inquiry.close')}
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">{t('inquiry.productInquiry')}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {t('inquiry.product')} <span className="font-medium text-gray-700">{productName}</span>
                <span className="ml-2 font-mono text-gray-400">{t('inquiry.sku')} {productId}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiry.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                      errors.name ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder={t('inquiry.namePh')}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('inquiry.company')}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder={t('inquiry.companyPh')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiry.country')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                      errors.country ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder={t('inquiry.countryPh')}
                  />
                  {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiry.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
                      errors.email ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder={t('inquiry.emailPh')}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('inquiry.phone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder={t('inquiry.phonePh')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('inquiry.quantity')}</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder={t('inquiry.quantityPh')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('inquiry.timeframe')}</label>
                  <input
                    type="text"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder={t('inquiry.timeframePh')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('inquiry.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none ${
                    errors.message ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder={t('inquiry.messagePh')}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-brand-500 rounded focus:ring-brand-500"
                  />
                  <span className="text-sm text-gray-600">
                    {t('inquiry.agree')}
                  </span>
                </label>
                {errors.agree && <p className="mt-1 text-xs text-red-500">{errors.agree}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="btn-primary flex-1 justify-center !py-3">
                  {t('inquiry.submit')}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 font-semibold rounded-full transition-all"
                >
                  {t('inquiry.cancel')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}