import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { ChampionData } from '../../../interfaces'

interface TProps {
  champion: ChampionData
}

export const ChampionTags:FC<TProps> = ({ champion }) => {
  return (
    <Grid 
      item 
      xs={12} 
      sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
    >
      <Grid
        component="div"
        sx={{
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: 'primary.light',
          backgroundColor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography color="primary" component="h1" variant="h4" >Tags:</Typography>
        {
          champion.tags.map( tag => (
            <Typography sx={{ mx: 2 }} key={tag} align="justify" component="p" variant="h6" >{tag}</Typography>
          ))
        }
      </Grid>
    </Grid>
  )
}
