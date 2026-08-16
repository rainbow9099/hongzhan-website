import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Breadcrumb({ items }) {
  const { t } = useTranslation()

  const homeItem = { label: t('breadcrumb.home'), href: '/' }
  const crumbs =
    items && items.length > 0
      ? items[0].href === '/'
        ? items
        : [homeItem, ...items]
      : [homeItem]

  return (
    <nav className="text-sm text-gray-500 mb-2 pt-2 px-2" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}