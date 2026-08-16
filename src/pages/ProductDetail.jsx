import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProduct, getRelatedProducts } from '../data/products'
import Breadcrumb from '../components/Breadcrumb'
import ProductGallery from '../components/ProductGallery'
import ProductInfo from '../components/ProductInfo'
import KeyFeatures from '../components/KeyFeatures'
import Specifications from '../components/Specifications'
import PackagingCustomization from '../components/PackagingCustomization'
import UsageCare from '../components/UsageCare'
import RelatedProducts from '../components/RelatedProducts'
import InquiryModal from '../components/InquiryModal'

export default function ProductDetail() {
  const { id } = useParams()
  const { t } = useTranslation()
  const product = getProduct(id)
  const related = getRelatedProducts(id)
  const [inquiryOpen, setInquiryOpen] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">{t('productDetail.notFound')}</p>
          <Link to="/" className="btn-primary">
            {t('productDetail.backHome')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 md:pt-20">
      <Breadcrumb
        items={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: product.category, href: `/#products` },
          { label: product.name },
        ]}
      />

      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery images={product.images} productName={product.name} />
            <ProductInfo product={product} onInquiry={() => setInquiryOpen(true)} />
          </div>
        </div>
      </section>

      <KeyFeatures features={product.features} />

      <Specifications specs={product.specifications} downloads={product.downloads} />

      <PackagingCustomization
        packaging={product.packaging}
        onInquiry={() => setInquiryOpen(true)}
      />

      <UsageCare usage={product.usage} />

      <RelatedProducts products={related} />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        productId={product.id}
        productName={product.name}
      />
    </div>
  )
}