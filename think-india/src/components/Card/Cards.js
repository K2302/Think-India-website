import React, { useState } from 'react'

import Card from './Card';
import './Cards.css'
import {Pagination } from '@material-ui/lab'

const Cards = ({info}) => {

    const [events,setevents] = useState(info) ;
    const [page,setpage] = useState(1); 

  return (
    <div>
        <div className='cards' >
        {
            events.slice((page-1)*6,(page-1)*6 +6).map((event) => {
                return <Card key={event.id} {...event}></Card> 
                })
        }
        </div>
        <Pagination 
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          
          count={ (events?.length /6).toFixed()}
          onChange={(_, value) => {
            setpage(value);
            window.scroll(0, 450);
          }}
          />
    </div>
  )
}

export default Cards