import { FC } from "react"
import { Grid, Typography } from "@mui/material";
import { ChampionData } from "../../../interfaces";

interface TProps {
  champion: ChampionData;
}

export const ChampionEnemyTips:FC<TProps> = ({ champion }) => {
  return (
    <Grid 
      item 
      xs={12} 
      sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
      <Grid
        component="div"
        sx={{
          width: { xs: '100%', lg: '80%' },
          display: champion.enemytips.length > 0 ? 'block' : 'none',
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: '#e64a19',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography color="#e64a19" component="h2" variant="h4" >{`Consejos para ${champion.name} como enemigo:`}</Typography>
        
        {
          champion.enemytips.map( (tip, index) => (
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
