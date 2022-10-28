import { FC, useEffect, useState } from "react"
import { Button, Collapse, Grid, Stack, Typography } from "@mui/material"
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import { ChampionCard } from "../championCard/ChampionCard"
import { ChampionsData } from "../../interfaces";

interface TProps {
  champions: ChampionsData[];
}

export const ChampionLastView:FC<TProps> = ({champions}) => {
  
  const [championLastView, setChampionLastView] = useState(champions[0])

  useEffect(()=> {
    const championLocalStorage = localStorage.getItem('ChampLastView') || champions[0].id;

    if(championLocalStorage) {

      const lastView: ChampionsData[] = champions.filter( champion => champion.id === championLocalStorage);
      return setChampionLastView(lastView[0])    
    }

  }, [champions])

  return (
    <Grid container justifyContent="center" sx={{ mb: 2 }}>
      <Grid 
        item 
        xs={12} 
        sx={{
          mb: 2,
          p: 2, 
          backgroundColor: "secondary.main", 
          borderRadius: '10px'
        }}
      >
        <Typography component="h2" variant="h4">Último campeón visto</Typography>
      </Grid>
        <ChampionCard champion={championLastView} />  
    </Grid>
  )
}
