import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAllProducts } from '../data/products'

export default function FeaturedProducts() {
  const { t } = useTranslation()
  const products = getAllProducts().slice(0, 4)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title mb-2">{t('featured.title')}</h2>
            <p className="text-gray-600">{t('featured.subtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-500 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">{product.id}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-500 font-semibold text-sm">{t('featured.viewDetails')}</span>
                  <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}