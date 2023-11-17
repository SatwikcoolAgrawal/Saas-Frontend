import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PricingCard from '../components/PricingCard';


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
   
  },
  {
    title: 'Pro',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
  
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],

  },
];




const Plans = () => {
  const {service} = useParams();
  const [islogin,setLogin]=useState(false);
  
 

  useEffect(()=>{
    const token=sessionStorage.getItem('access-token')
    if (token){
      setLogin(true);
    }
  },[])


  return (
    <div>
       <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          We Offer a Below Plans for {service}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
         
            <Grid item key={tier.title} xs={12} md={4}>
            <PricingCard plan={tier} islogin={islogin}/>
            </Grid>
          ))}
        </Grid>
      </Container>
   
    </div>
  )
}

export default Plans