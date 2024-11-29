import React from 'react'
import Navbar from '../components/NavBar'
import HeroSection from './HeroSection'
import Dishes from '../components/Dishes'
import Footer from '../components/Footer'
import BookingAd from '../components/BookingAd'
import ReviewCarouse from '../components/Carousel'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
      <BookingAd/>
      <Dishes/>
      <ReviewCarouse/>
      <Footer/>
    </div>
  )
}

export default Home
