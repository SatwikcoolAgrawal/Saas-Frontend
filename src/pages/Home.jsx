import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionsArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate} from 'react-router-dom';

const cards = ["Kubernetes","Docker","MongoDB","Virtual Machine"];

export default function Home() {
    const navigate=useNavigate();
    function handleClick(e,card){
        console.log(card)
    navigate(`/plans/${card}`);
    }
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            py: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
                Services Offered
            </Typography>
           
           
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' ,p:3}}
                  onClick={(e)=>handleClick(e,card)} >
                <CardActionsArea   >
                 
                  <CardContent sx={{ flexGrow: 1 ,textAlign:'center'}}>
                    <Typography gutterBottom variant="h3" component="h1">
                      {card}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{width:"100%"}}>
                   
                   <Button variant="contained" fullWidth>See Plans</Button>
          
                  </CardActions>
                  </CardActionsArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
    
    </React.Fragment>
 
  );
}