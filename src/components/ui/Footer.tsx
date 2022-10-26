import { FC } from "react"
import NextLink from "next/link"
import { Box, Grid, Link, Typography } from "@mui/material"


export const Footer:FC = () => {
  return (
    <footer>
      <Box
        component="footer"
        sx={{
          p: 2,
          backgroundColor: 'secondary.main', 
        }}
      >
        <Grid 
          width="100%"
          sx={{
            display: 'flex', 
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1">Campeones de League of Legends</Typography>
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Box>
    </footer> 
  )
}
