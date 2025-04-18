import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    <div id='function'>{props.data.map((item, index) => (
      <div id='main'>
        <img src={item.img} alt="" />
        <h6>{item.pname}</h6>
        <h5>${item.rate}</h5>
      </div>
    ))}</div>
  )
}
