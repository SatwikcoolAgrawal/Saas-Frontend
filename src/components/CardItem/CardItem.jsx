import React from 'react'
import './CardItem.css'

const CardItem = (props) => {
  return (
    <div className='CardItem'>
      <img src={props.image} alt=" "/>
      <p>{props.name}</p>
      {/* <div classname="Item-prices">
        {props.price}
      </div> */}

    </div>
  )
}

export default CardItem