import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Categories from '../components/Categories'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProducts from '../components/FeaturedProducts'
import UseCases from '../components/UseCases'
import OEMCTA from '../components/OEMCTA'
import LatestNews from '../components/LatestNews'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <WhyChooseUs />
      <FeaturedProducts />
      <UseCases />
      <OEMCTA />
      <LatestNews />
    </>
  )
}