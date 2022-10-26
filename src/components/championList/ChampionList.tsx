import { FC, useState } from "react";
import { Button, Collapse, Grid, Stack, Typography } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import { ChampionsData } from "../../interfaces";
import { ChampionCard } from "../championCard/ChampionCard"

interface TProps {
  champions: ChampionsData[];
}

export const ChampionList:FC<TProps> = ({ champions }) => {

  const [checked, setChecked] = useState(false);

  const handleClick = () => {

    setChecked(!checked)
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
          <Button onClick={ handleClick } size="large" endIcon={ checked ? <KeyboardArrowUp /> : <KeyboardArrowDown /> }>
            { checked ? "Ocultar" :  "Mostrar" }
          </Button>
        </Stack>
      </Grid>
      <Collapse in={checked}>
        <Grid 
          container 
          justifyContent="space-between"
          rowSpacing={3}
          columnSpacing={2}
        >
          {
            champions.map(champion => (
              <ChampionCard champion={champion} key={champion.key} />
            ))
          }
        </Grid>
      </Collapse>
    </Grid>

    </>
    
  )
}
