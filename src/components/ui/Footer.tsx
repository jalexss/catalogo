import { FC } from "react"
import { Box, Grid, Typography } from "@mui/material"


export const Footer:FC = () => {
  return (
      <Box
        component="footer"
        sx={{
          p: '1rem',
          backgroundColor: 'secondary.main',
          flexShrink: '0px', 
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
          <Typography variant="body1">Contact:</Typography>
          <Typography variant="overline">ja.soledads@gmail.com</Typography>
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Box>
  )
}
