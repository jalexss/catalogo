import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

const Home: NextPage = () => {

  return (
    <ApplicationWrapper
      title="Home - RootLab - Lol Champion" 
      description="Home of the RootLab League of legends - champions"
    >
      <Grid 
        component="div" 
        width="100%" 
        height='calc(100vh - 10rem)'
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('img/background1.png')`,
        }}
      > 
          <Grid container id="container" justifyContent="center">
              <Box
                id="container-box"
                textAlign="center"
                sx={{
                  width: '90%',
                  p: 3,
                }}
              >
                <Typography component="h1" variant="h1" color="primary" sx={{ mb: 1 }} >
                  Bienvenido a Rootlab League of Legends
                </Typography>
                <Typography component="h1" variant="h3" color="error" >
                  Campeones
                </Typography>
              </Box>
          </Grid>
      </Grid>
    </ApplicationWrapper>
  )
}


export default Home
