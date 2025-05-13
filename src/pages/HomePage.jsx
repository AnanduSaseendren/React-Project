import React from 'react'
import Navbar from '../components/Navbar'
import TopBanner from '../components/TopBanner'
import PerfumeCarousel from '../components/PerfumeCarousel'
import OffersSection from '../components/OffersSection'
import FeatureSection from '../components/FeatureSection'
import FeaturedCarousel from '../components/FeaturedCarousel'
import QuoteSection from '../components/QuoteSection'
import CategoriesSection from '../components/CategoriesSection'
import ExploreCategories from '../components/ExploreCategories'
import OffersCarousel from '../components/OffersCarousel'
import PromoBanner from '../components/PromoBanner'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
    <Navbar/>
    <TopBanner/>
    <PerfumeCarousel/>
    <OffersSection/>
    <FeatureSection/>
    <FeaturedCarousel/>
    <QuoteSection/>
    <CategoriesSection/>
    <ExploreCategories/>
    <OffersCarousel/>
    <PromoBanner/>
    <Footer/>
    </>
  )
}

export default HomePage
