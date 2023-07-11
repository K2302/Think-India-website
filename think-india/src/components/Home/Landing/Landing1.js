import React from 'react'
import './Landing.css';
import Navbar from '../../navfoot/Navbar/Navbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

  };


  return (
    <>
      <div>
        <Navbar />
      </ div >
    </>
  )
}

export default Hero