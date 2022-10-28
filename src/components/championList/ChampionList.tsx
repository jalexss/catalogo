import { ChangeEvent, FC, useState } from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";

import { ChampionsData } from "../../interfaces";
import { ChampionCard } from "../championCard/ChampionCard"

interface TProps {
  allChampions: ChampionsData[];
}

export const ChampionList:FC<TProps> = ({ allChampions }) => {

  const [champions, setChampions] = useState(allChampions);

  const filterChampions = (query: string) => {

    return !query.length ? allChampions : champions.filter(champion => champion.name.toLowerCase().includes(query.toLowerCase()));
  }
    
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    const { value } = event.target;
    setChampions( filterChampions(value) );
  }

  return (
    <>
      <Grid
        container
        flexDirection="row"
      >
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
          <Stack direction="row" alignItems="center" justifyContent="space-between" >
            <Typography component="h2" variant="h4">Todos los campeones</Typography>
            
            <TextField onChange={handleChange} label="Buscar algun campeón" type="search" />
          </Stack>
        </Grid>
        <Grid 
          container 
          width="100%"
          justifyContent="center"
          rowSpacing={3}
        >
          {
            champions.map(champion => (
              <ChampionCard champion={champion} key={champion.key} />
            ))
          }
        </Grid>
      </Grid>
    </>
    
  )
}
