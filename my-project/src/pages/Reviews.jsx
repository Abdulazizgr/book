import React from 'react'
import Navbar1 from '../components/Navbar1';
import FilterOptions from '../components/FilterOptions';
import ReviewList from '../components/ReviewList';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const Reviews = () => {
  return (
    <div className=''>
      <Navbar1/>
      <FilterOptions/>
      <ReviewList/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Reviews
