import React, {createContext, useState} from 'react'
import data_product from '../assets/data';

export const PlanContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < data_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const PlanContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    console.log(cartItems);

    const addToCart = (itemId) => {
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
      setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
   
  const contextValue = {data_product, cartItems, addToCart, removeFromCart };
  return (
    <PlanContext.Provider value={contextValue}>
      {props.children}
    </PlanContext.Provider>
  )
}

export default PlanContextProvider;

