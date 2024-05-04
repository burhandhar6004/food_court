// import React, { useEffect } from 'react'
import Crousel from './Crousel'
import ShopItems from './ShopItems'
// import CardItems from './CardItems'
import Blogs from './Blogs'
import Footer from './Footer'
import UserReview from './UserReview'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchParatha } from '../features/paratha/parathaSlice'
import HeroSection from './HeroSection'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Burger from '../Pages/Burger'
// import SlideImage from './SlideImage'


const Home = () => {
  

  return (
    <>
        <Crousel/>
        <ShopItems/>
        <HeroSection/>
        <Blogs/>
        {/* <SlideImage/> */}
        <UserReview/>
        <Footer/>
    </>
  )
}

export default Home