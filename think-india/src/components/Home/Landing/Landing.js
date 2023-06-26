import React from 'react'
import './Landing.css';
import Typed from "react-typed";
import Navbar from '../../navfoot/Navbar/Navbar';
const Hero = () => {
  return (
    <>
      <div className="hero-top">
        <Navbar />
        <div className="hero-top-main">
          <h1 style={{ userSelect: 'none',marginLeft:'15px' }}>THINK </h1>
          <h1 style={{ userSelect: 'none',marginLeft:'35px'  }}>  INDIA</h1>
          <h2 style={{ userSelect: 'none',marginLeft:'4px'  }}>NORTH EAST</h2>
        </div>

        {/* <Typed
          className="typewriter-hero" style={{ userSelect: 'none' }}
          strings={[
           "'Think India' was initiated in 2006 by students of IISc, IIM B & other premier institutions at Bengaluru, India. It is an initiative to bring together the best talent & intellectual human resource of the country & to infuse in them a 'Nation First' attitude."
          ]}
          typeSpeed={50}
          backSpeed={20}
          loop
        /> */}
      </div>

      
    </>
  )
}

export default Hero