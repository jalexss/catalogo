import { FC } from "react"
import { Grid } from "@mui/material";
import { ChampionData } from "../../../interfaces";

interface TProps {
  champion: ChampionData;
}

export const ChampionDefaultImage:FC<TProps> = ({ champion }) => {
  return (
    <Grid item xs={12} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid
        component="img"
        sx={{
          width: { xs: '100%', lg: '80%'},
          maxHeight: { xs: 400, md: 700 , lg: '80%' },
          borderRadius: '10px',
        }}
        src={ champion.images.default } 
        alt={`Default visual art - ${champion.id}`} 
      />
    </Grid>
  )
}
