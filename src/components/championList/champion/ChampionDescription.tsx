import { FC } from "react"
import { Grid, Typography } from "@mui/material";
import { ChampionData } from "../../../interfaces";

interface TProps {
  champion: ChampionData;
}

export const ChampionDescription:FC<TProps> = ({champion}) => {
  return (
    <Grid 
      item 
      xs={12} 
      sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
    >
      <Grid
        component="div"
        sx={{
          width: { xs: '100%', lg: '80%' },
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: 'primary.light',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography color="primary" component="h1" variant="h4" >{champion.name}, {champion.title}</Typography>
        <Typography align="justify" component="p" variant="body1" >{champion.lore}</Typography>
      </Grid>
    </Grid>
  )
}
