import React from 'react'
import { Typography } from '@material-ui/core'
import './Card.css'
import {  FcLikePlaceholder } from "react-icons/fc"
import { VscComment } from "react-icons/vsc";



const Card = ({ id, name, image, logo, date, month }) => {
  return (
    <div className='card'>
      <div>
        <img className='event-image' src={image} alt='' ></img>
      </div>
      <div className='date-block'>

        <div className='date'>{date}</div>
        <div className='month'>{month}</div>

      </div>
      <div className='event'>
        <div className='event-name'>
          <Typography variant='h5'>{name}</Typography>
        </div>
        <img className='logo-img' src={logo} alt=''></img>
      </div>

      <div className='bottom-div'>

        <div className='icons'>

        <FcLikePlaceholder className='icon'></FcLikePlaceholder>
        <VscComment className='icon'></VscComment>
        </div>

        <div >
          <button className='btn'>View Event </button>
        </div>
      </div>
    </div>
  )
}

export default Card