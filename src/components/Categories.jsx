import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCategories } from '../data/products'

const categoryIcons = {
  paddles: '🏓',
  accessories: '🔧',
  bags: '🎒',
  shoes: '👟',
  apparel: '👕',
  hats: '🧢',
  eyewear: '👓',
  balls: '⚾',
}

export default function Categories() {
  const { t } = useTranslation()
  const categories = getCategories()

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('categories.title')}</h2>
          <p className="section-subtitle">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/category/${cat.slug}`}
              className="group bg-white rounded-2xl p-6 text-center card-hover border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center text-3xl group-hover:bg-brand-100 group-hover:scale-110 transition-all duration-300">
                {categoryIcons[cat.slug] || '📦'}
              </div>
              <h3 className="mt-4 font-bold text-gray-900 group-hover:text-brand-500 transition-colors">
                {t(`categories.${cat.slug}`)}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{cat.count} {t('categories.skus')}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-outline">
            {t('categories.viewAllCta')}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}