import { FC } from "react"
import NextLink from "next/link"
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material"

export const Navbar:FC = () => {
  return (
    <AppBar position="static" color="secondary" >

      <Toolbar >
        <img 
          alt="Icon de League of Legends" 
          src="/img/IconLol.svg" 
          style={{ width: '46px', height: '46px' }} 
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
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
