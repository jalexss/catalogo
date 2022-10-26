import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { ChampionData } from "../../../interfaces"

interface TProps {
  champion: ChampionData
}

export const ChampionAllyTips:FC<TProps> = ({champion}) => {
  return (
    <Grid item xs={12} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
      <Grid
        component="div"
        sx={{
          width: { xs: '100%', lg: '80%' },
          p: 2,
          display: champion.allytips.length > 0 ? 'block' : 'none',
          border: 1,
          borderRadius: '10px',
          borderColor: '#76ff03',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography color="#76ff03" component="h2" variant="h4" >{`Consejos para ${champion.name} como equipo:`}</Typography>
        
        {
          champion.allytips.map( (tip, index) => (
            <Typography
              key={index} 
              align="justify"
              component="p" 
              variant="body1"
              sx={{ mb: 1 }} 
            >
              {`${index+1})`} {tip}
            </Typography>
          ))
        }
      </Grid>
    </Grid>
  )
}
