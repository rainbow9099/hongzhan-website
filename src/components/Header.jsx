import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../images/logo.png'
import LanguageSwitcher from './LanguageSwitcher'

const navLinkKeys = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.products', href: '/products' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.contact', href: '/contact' },
  { key: 'nav.oem', href: '/#oem' },
  { key: 'nav.news', href: '/#news' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (href) => {
    if (href.includes('#')) return false
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
        ? 'bg-white/90 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt=""
              className={`h-10 w-auto object-contain transition-all ${isScrolled || location.pathname !== '/'
                  ? 'scale-100'
                  : 'scale-110'
                }`}
            />
            {/* <img
              src={textLogo}
              alt="Hong Zhan"
              className={`h-10 w-auto object-contain transition-all ${
                isScrolled || location.pathname !== '/'
                  ? 'scale-100'
                  : 'scale-110'
              }`}
            /> */}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinkKeys.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${active
                      ? isScrolled || location.pathname !== '/'
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-white bg-white/15'
                      : isScrolled || location.pathname !== '/'
                        ? 'text-gray-700 hover:text-brand-500 hover:bg-gray-100'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {t(item.key)}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled || location.pathname !== '/'} />
            <button
              hidden
              className={`p-2 rounded-md transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/contact" className="btn-primary text-sm !py-2 !px-5">
              {t('nav.inquiry')}
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinkKeys.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`px-4 py-2 rounded-md transition-colors ${active
                        ? 'text-brand-600 bg-brand-50 font-medium'
                        : 'text-gray-700 hover:text-brand-500 hover:bg-brand-50'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                )
              })}
              <hr className="my-2" />
              <div className="flex items-center justify-between px-4 py-2">
                <LanguageSwitcher variant="mobile" />
                <Link to="/contact" className="btn-primary text-sm !py-1.5 !px-4" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.inquiry')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}