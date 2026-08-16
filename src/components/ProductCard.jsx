import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function ProductCard({ product }) {
  const { t } = useTranslation()

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/90 backdrop-blur text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {t(`categories.${product.category}`, { defaultValue: product.category })}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-gray-900 group-hover:text-brand-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <span className="text-xs text-gray-400 font-mono whitespace-nowrap">{product.id}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-brand-500 font-semibold text-sm">{t('productDetail.viewDetails')}</span>
          <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}