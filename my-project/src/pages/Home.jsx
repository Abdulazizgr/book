import React from 'react'
import Navbar1 from '../components/Navbar1';
import HeroSection1 from '../components/HeroSection1';
import FeaturedReviews from '../components/FeaturedReviews';
import LatestNews from '../components/LatestNews';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar1/>
      <HeroSection1/>
      <FeaturedReviews />
      <LatestNews />
      < Footer/>
   
    </div>
  )
}

export default Home
