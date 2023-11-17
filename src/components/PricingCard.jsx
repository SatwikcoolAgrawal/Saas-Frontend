import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function PricingCard({plan,islogin}) {
    const navigate=useNavigate();
    const handleCardClick = async (e,id)=>{
        if(islogin){
          api.post("/addtocart",{id:id});
          }
        else {
          navigate('/signup')
        }
      }
  return (
    <Card>
    <CardHeader
      title={plan.title}
      subheader={(plan.title==="Pro")? "Recommended":null}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{
        align: 'center',
        color:(theme)=> theme.palette.secondary['main']
      }}
      sx={{
        color:(theme)=> theme.palette.secondary['main'],
        backgroundColor: (theme) =>
          theme.palette.primary['main'],
        
      }}
    />
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
        }}
      >
        <Typography component="h2" variant="h3" color="text.primary" py={2}>
          ${plan.price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          /mo
        </Typography>
      </Box>
    
        
          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{
              py:2
            }}
          >
            {plan.description}
          </Typography>
      
     
    </CardContent>
    <CardActions>
      <Button fullWidth variant="outlined" onClick={(e)=>handleCardClick(e,plan.id)}>
        {islogin ? "add to cart" : "Sign up for free"}
      </Button>
    </CardActions>
  </Card>
  
  )
}
