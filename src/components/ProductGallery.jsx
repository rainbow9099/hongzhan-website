import { useState, useRef } from 'react'
  import { useTranslation } from 'react-i18next'

export default function ProductGallery({ images, productName }) {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomEnabled, setZoomEnabled] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const imgRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPos({ x, y })
  }

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <>
      <div className="sticky top-28">
        <div
          className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-zoom-in"
          onMouseEnter={() => setZoomEnabled(true)}
          onMouseLeave={() => { setZoomEnabled(false); setZoomEnabled(false) }}
          onMouseMove={handleMouseMove}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            ref={imgRef}
            src={images[activeIndex]}
            alt={`${productName} - view ${activeIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-200"
            style={{
              transform: zoomEnabled ? 'scale(1.5)' : 'scale(1)',
              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
            }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
            aria-label={t('productDetail.prevImage')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
            aria-label={t('productDetail.nextImage')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                i === activeIndex
                  ? 'border-brand-500 ring-2 ring-brand-200'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 text-white p-3"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img
            src={images[activeIndex]}
            alt={productName}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 text-white p-3"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}