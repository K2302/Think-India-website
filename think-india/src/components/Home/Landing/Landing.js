import React from 'react'
import './Landing.css';
import Navbar from '../../navfoot/Navbar/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Landing.css';
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
    <Navbar  />
    </ div >
      <Slider {...settings} >
    <div>
      <img src="https://res.cloudinary.com/priyojit/image/upload/v1688032745/BACKGROUND4_srxvbs.jpg" alt="" />
    </div>
    <div>
    <img src="https://res.cloudinary.com/priyojit/image/upload/v1688032745/BACKGROUND4_srxvbs.jpg" alt=""/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/priyojit/image/upload/v1688032745/BACKGROUND4_srxvbs.jpg" alt=""/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/priyojit/image/upload/v1688032745/BACKGROUND4_srxvbs.jpg" alt=""/>
    </div>
    
  </Slider>
      
    </>
  )
}

export default Hero