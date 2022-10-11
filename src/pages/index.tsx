import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

const Home: NextPage = () => {

  return (
    <ApplicationWrapper
      title="Home" 
      description="Home of the RootLab League of legends - champions"
    >
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('img/background1.png')`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src='img/background1.png' alt="imagen referente a League of legends" />}
      
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h2" color="inherit" >
                Bienvenido a Rootlab - League of Legends
              </Typography>
              <Typography component="h1" variant="h3" color="error" >
                Champion
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </ApplicationWrapper>
  )
}


export default Home
