import { Container, Grid } from '@mui/material'
import React, { useState,useEffect } from 'react'

import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import TotalCard from '../components/TotalCard';

const mock=[
  {
      "_id": "6554ba9fb6652e61bdc01ce8",
      "productId": "prod_P0fHy7OZwYPVKZ",
      "servicename": "Kubernets",
      "description": "1GB RAM , 2 Core CPU",
      "plan": "Basic",
      "price":30,
      "priceId": "price_1OCdwXSCZn81mFB25Dni9AYj",
      "duration": "12 days",
      "__v": 0
  }
]

const Cart = () => {
  const [items,setItems]=useState([]);
  const navigate=useNavigate();
  // useEffect(() => {
  //   const token=sessionStorage.getItem('access-token');
  //   if (token){
  //     api.get('/api/cart',{"Authorization":token}).then(res=>{
  //       setItems(res.data.data);
  //       console.log(items);
  //     })
  //   }
  //   else {
  //     navigate("/login")
  //   }
  // }, [])
  
  return (
    <Container Gutters component="main" sx={{ pt: 8, pb: 6 }}>
      <Grid container  spacing={2} >
        <Grid item  xs={12} sm={6} >
          {
            mock.map((item,idx)=>(
              <Grid item key={idx} xs={12}>
                <CartCard item={item}/>
              </Grid>
            ))
          }
        </Grid>
        <Grid item  xs={12} sm={6} >
          <TotalCard total={40}/>
        </Grid>
    </Grid>
    </Container>
  )
}

export default Cart