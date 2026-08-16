import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function RelatedProducts({ products }) {
  const { t } = useTranslation()

  if (!products || products.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t('productDetail.relatedTitle')}
            </h2>
            <p className="text-gray-600">{t('productDetail.relatedDesc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-500 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 font-mono mb-2">{product.id}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.shortDescription}
                </p>
                <span className="inline-flex items-center text-brand-500 text-sm font-semibold">
                  {t('productDetail.viewProductDetails')}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}