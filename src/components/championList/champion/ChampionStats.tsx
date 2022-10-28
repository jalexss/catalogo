import { FC } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ChampionData } from "../../../interfaces";


interface TProps {
  champion: ChampionData;
}

export const ChampionStats:FC<TProps> = ({champion}) => {

  const stadistics = Object.entries(champion.stats);

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
        }}
      >
        <Typography color="primary" component="h1" variant="h4" >Estadísticas</Typography>
        {
          stadistics.map( (stats, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={1} sx={{ my: 1 }} >
              <Grid width={10} height={10} sx={{ backgroundColor: 'error.main', borderRadius: '10px' }} />
              <Typography align="justify" color="lightgreen" component="p" variant="body1" >{stats[0]}:</Typography>
              <Typography align="justify" component="p" variant="body1" >{stats[1]}:</Typography>
            </Stack>
          ))
        }
      </Grid>
    </Grid>
  )
}
