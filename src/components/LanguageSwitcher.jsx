import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ variant = 'desktop', isScrolled = false }) {
  const { i18n, t } = useTranslation()
  const currentLang = i18n.language

  const toggleLang = () => {
    const next = currentLang === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(next)
  }

  if (variant === 'mobile') {
    return (
      <button onClick={toggleLang} className="text-sm text-gray-700">
        {currentLang === 'zh' ? 'English' : '中文'}
      </button>
    )
  }

  return (
    <button
      onClick={toggleLang}
      className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
        isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
      }`}
    >
      {currentLang === 'zh' ? 'EN' : '中'}
    </button>
  )
}