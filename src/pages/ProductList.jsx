import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getAllProducts, getCategories, getCategoryBySlug } from '../data/products'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'

export default function ProductList() {
  const { categorySlug } = useParams()
  const { t } = useTranslation()
  const categories = getCategories()

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null

  const [sortBy, setSortBy] = useState('default')
  const [filters, setFilters] = useState({
    category: categorySlug || 'all',
    priceRange: 'all',
    material: 'all',
  })

  const products = useMemo(() => {
    let list = getAllProducts()
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory.name)
    } else if (filters.category !== 'all') {
      const cat = getCategoryBySlug(filters.category)
      if (cat) list = list.filter((p) => p.category === cat.name)
    }
    if (filters.material !== 'all') {
      list = list.filter((p) => typeof p.material === 'string' && p.material === filters.material)
    }
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      list = list.filter((p) => typeof p.price === 'number' && p.price >= min && p.price <= max)
    }
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
    return list
  }, [sortBy, filters, activeCategory])

  const sortOptions = [
    { value: 'default', label: t('productList.sortDefault') },
    { value: 'price-asc', label: t('productList.sortPriceAsc') },
    { value: 'price-desc', label: t('productList.sortPriceDesc') },
  ]

  const priceRanges = [
    { value: 'all', label: t('productList.allPrices') },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-99999', label: '$500+' },
  ]

  const uniqueMaterials = useMemo(() => {
    const set = new Set()
    getAllProducts().forEach((p) => {
      if (p.material) set.add(p.material)
    })
    return Array.from(set)
  }, [])

  const materials = useMemo(() => {
    const items = [{ value: 'all', label: t('productList.allMaterials') }]
    const labelMap = {
      'Graphite': t('productList.graphite'),
      'Composite': t('productList.composite'),
      'Polymer': t('productList.polymer'),
      'Carbon Fiber': t('productList.carbonFiber'),
    }
    uniqueMaterials.forEach((m) => {
      items.push({ value: m, label: labelMap[m] || m })
    })
    return items
  }, [uniqueMaterials, t])

  const pageTitle = activeCategory ? activeCategory.name : t('productList.allProducts')
  const pageSubtitle = activeCategory ? `${activeCategory.count} ${t('productList.productsAvailable')}` : t('productList.collectionDesc')

  return (
    <div className="pt-16 md:pt-20">
      <Breadcrumb
        items={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: t('breadcrumb.products'), href: '/products' },
          ...(activeCategory ? [{ label: activeCategory.name }] : []),
        ]}
      />

      <section className="py-10 md:py-14 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-700 mb-4">
              {t('productList.badge')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">{pageSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t('productList.filters')}</h3>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('productList.category')}</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setFilters((f) => ({ ...f, category: 'all' }))}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                        filters.category === 'all'
                          ? 'bg-brand-100 text-brand-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {t('productList.allCategories')}
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => setFilters((f) => ({ ...f, category: cat.slug }))}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                          filters.category === cat.slug
                            ? 'bg-brand-100 text-brand-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('productList.priceRange')}</h4>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters((f) => ({ ...f, priceRange: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {priceRanges.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('productList.material')}</h4>
                  <select
                    value={filters.material}
                    onChange={(e) => setFilters((f) => ({ ...f, material: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {materials.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setFilters({ category: 'all', priceRange: 'all', material: 'all' })}
                  className="w-full py-2 text-sm font-medium text-brand-600 hover:text-brand-700 border border-brand-200 rounded-lg hover:bg-brand-50 transition"
                >
                  {t('productList.clearFilters')}
                </button>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <p className="text-sm text-gray-500">
                  {t('productList.showing', { count: products.length })}
                </p>
                <div className="flex items-center gap-3">
                  <label className="text-sm text-gray-600">{t('productList.sortBy')}:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {products.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('productList.noProducts')}</h3>
                  <p className="text-gray-600">{t('productList.noProductsDesc')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}