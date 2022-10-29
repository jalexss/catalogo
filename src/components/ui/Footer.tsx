import { FC } from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"


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
          <Stack>
            <Typography variant="overline">ja.soledads@gmail.com</Typography>
            <Typography variant="overline">github.com/jalexss/catalogo</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Box>
  )
}
