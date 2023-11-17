import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeCard from '../components/HomeCard';

const cards = [{servicename:"Kubernetes",description:"Writing experts recommend paragraphs of no more than 150 words in three to eight sentences. "},{servicename:"Docker",description:"Writing experts recommend paragraphs of no more than 150 words in three to eight sentences."},{servicename:"Storage",description:"Writing experts recommend paragraphs of no more than 150 words in three to eight sentences."},{servicename:"Cloud",description:"Writing experts recommend paragraphs of no more than 150 words in three to eight sentences."}];

export default function Home() {
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
            {cards.map((service) => (
              <Grid item xs={12} sm={6} md={4}>
                <HomeCard service={service}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
    
    </React.Fragment>
 
  );
}