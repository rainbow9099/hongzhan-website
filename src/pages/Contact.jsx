import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      key: 'address',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      key: 'phone',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      key: 'email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const faqs = ['responseTime', 'worldwide', 'moq', 'catalog', 'oemService', 'distributor']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = t('contact.errors.name')
    if (!formData.country) newErrors.country = t('contact.errors.country')
    if (!formData.email) newErrors.email = t('contact.errors.email')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t('contact.errors.emailInvalid')
    if (!formData.subject) newErrors.subject = t('contact.errors.subject')
    if (!formData.message) newErrors.message = t('contact.errors.message')
    if (!formData.agree) newErrors.agree = t('contact.errors.agree')
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      country: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      agree: false,
    })
    setErrors({})
    setSubmitted(false)
  }

  const subjects = [
    { value: '', label: t('contact.selectTopic') },
    { value: 'product-inquiry', label: t('contact.productInquiry') },
    { value: 'wholesale', label: t('contact.wholesale') },
    { value: 'oem-odm', label: t('contact.oemCustom') },
    { value: 'sample', label: t('contact.sample') },
    { value: 'support', label: t('contact.support') },
    { value: 'other', label: t('contact.other') },
  ]

  return (
    <div className="pt-16 md:pt-20">
      <Breadcrumb
        items={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: t('nav.contact') },
        ]}
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-700 mb-4">
              {t('contact.heroBadge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('contact.heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">{t('contact.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.key} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-gray-900">
                        {t(`contact.${info.key}`)}
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {(t(`contact.${info.key}Lines`, { returnObjects: true }) || []).map(
                        (line, i) => (
                          <p key={i} className="text-gray-600 text-sm">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-brand-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">{t('contact.preferCall')}</h3>
                <p className="text-brand-100 text-sm mb-4">{t('contact.preferCallDesc')}</p>
                <a
                  href="tel:+8618207353648"
                  className="inline-flex items-center gap-2 bg-white text-brand-600 px-4 py-2 rounded-lg font-semibold hover:bg-brand-50 transition"
                >
                  {t('contact.callNow')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">{t('contact.altContact')}</h3>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://wa.me/8618207353648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition"
                  >
                    <span className="text-xl">💬</span>
                    <span className="text-xs text-gray-600 text-center">{t('contact.whatsapp')}</span>
                  </a>
                  <a
                    href="mailto:kxiaoxiaole@gmail.com"
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition"
                  >
                    <span className="text-xl">📧</span>
                    <span className="text-xs text-gray-600 text-center">{t('contact.emailUs')}</span>
                  </a>
                  <a
                    href="tel:+8618207353648"
                    className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition"
                  >
                    <span className="text-xl">📞</span>
                    <span className="text-xs text-gray-600 text-center">{t('contact.callUs')}</span>
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('contact.thankYou')}</h2>
                  <p className="text-gray-600 mb-6">{t('contact.thankYouDesc')}</p>
                  <button onClick={handleReset} className="btn-primary">
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.sendMessage')}</h2>
                  <p className="text-gray-600 mb-8">{t('contact.sendMessageSubtitle')}</p>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.namePh')}
                          className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.company')}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t('contact.companyPh')}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.country')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder={t('contact.countryPh')}
                          className={`input-field ${errors.country ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        />
                        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.emailField')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.emailPh')}
                          className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.phoneField')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contact.phonePh')}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('contact.subject')} <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input-field ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        >
                          {subjects.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={t('contact.messagePh')}
                        className={`input-field resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <div>
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                        />
                        <span className="text-sm text-gray-600">{t('contact.agree')}</span>
                      </label>
                      {errors.agree && <p className="mt-1 text-sm text-red-600 ml-6">{errors.agree}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full md:w-auto">
                      {t('contact.sendBtn')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{t('contact.faqTitle')}</h2>
            <p className="text-gray-600 mt-2">{t('contact.faqSubtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faqKey) => (
              <details
                key={faqKey}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">
                    {t(`contact.faqs.${faqKey}.q`)}
                  </span>
                  <span className="text-brand-600 text-xl group-open:rotate-180 transition">
                    −
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {t(`contact.faqs.${faqKey}.a`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}