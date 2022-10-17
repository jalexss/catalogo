import { FC } from "react"
import NextLink from "next/link"
import { AppBar, Box, Grid, Link, Toolbar, Typography } from "@mui/material"

export const Navbar:FC = () => {
  return (
    <AppBar position="static" color="secondary" >

      <Toolbar>
        <Grid 
          container  
          justifyContent='flex-start'
          alignItems="center"
        >
          <img 
            alt="Icon de League of Legends" 
            src="/svg/IconLol.svg" 
            style={{ width: '40px', height: '40px' }} 
          />
          
          <Box 
            display="flex" 
            flexDirection="row"
            sx={{ px: 2 }} 
          >
            <NextLink href="/" passHref>
              <Link underline="hover" >
                <Typography variant="body1" component="p" sx={{ mr: 2 }} >
                  Home
                </Typography>
              </Link>
            </NextLink>


            <NextLink href="/champion" passHref>
              <Link underline="hover" >
                <Typography color="inherit" variant="body1" component="p">
                  Campeones
                </Typography>
              </Link>
            </NextLink>
          </Box>
        </Grid>
        
      </Toolbar>
    </AppBar>
  )
}
