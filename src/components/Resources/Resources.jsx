import React from 'react'
import './Resources.css'
import data_product from '../assets/data'
import CardItem from '../CardItem/CardItem'

const resources = () => {
  return (
    <div className='services'>
        <h3>Resources offered</h3>
        <hr />
        <div className="services">
            {data_product.map((Item, i)=>{
                return <CardItem key={i} id={Item.id} name={Item.name} image={Item.image} />
            })}
        </div>

    </div>
  )
}
 export default resources


