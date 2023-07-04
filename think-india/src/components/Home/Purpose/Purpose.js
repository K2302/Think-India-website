import React from 'react';
import Card from './Card';
import "./Purpose.css"
const motto_dialogue = [

    '"Promote social harmony in every possible way and actively oppose any sectarian and narrow-minded activities of fissiparous tendencies.',
  
  '"Promote social harmony in every possible way and actively oppose any sectarian and narrow-minded activities of fissiparous tendencies.',
  
  '"Promote social harmony in every possible way and actively oppose any sectarian and narrow-minded activities of fissiparous tendencies.. ',
  
  '"Promote social harmony in every possible way and actively oppose any sectarian and narrow-minded activities of fissiparous tendencies..',
  
  '"Promote social harmony in every possible way and actively oppose any sectarian and narrow-minded activities of fissiparous tendencies..',
    
  
  
  ];
  
  const moto_image = [
    'https://res.cloudinary.com/priyojit/image/upload/v1688148647/purpose_vjxvao.jpg',
    'https://res.cloudinary.com/priyojit/image/upload/v1688148647/purpose_vjxvao.jpg',
    'https://res.cloudinary.com/priyojit/image/upload/v1688148647/purpose_vjxvao.jpg',
    'https://res.cloudinary.com/priyojit/image/upload/v1688148647/purpose_vjxvao.jpg',
    'https://res.cloudinary.com/priyojit/image/upload/v1688148647/purpose_vjxvao.jpg'
  ]
  
const Purpose = () => {
  return (
    <div>
        <div className="motto">
        <h3 style={{ fontSize: "50px" }}>Purpose of THINK INDIA</h3>
      </div>
      <div className="test_card">
        <div className="cards-set-1">
        <Card image={moto_image[0]} dialogue={motto_dialogue[0]} />
          <Card image={moto_image[1]} dialogue={motto_dialogue[1]} />
          <Card image={moto_image[2]} dialogue={motto_dialogue[2]} />
          <Card image={moto_image[3]} dialogue={motto_dialogue[3]} />
          <Card image={moto_image[4]} dialogue={motto_dialogue[4]} />
        </div>
    </div>
    </div>
  )
}

export default Purpose