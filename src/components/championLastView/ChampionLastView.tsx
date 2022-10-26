import { FC, useEffect, useState } from "react"
import { Button, Collapse, Stack, Typography } from "@mui/material"
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

import { ChampionCard } from "../championCard/ChampionCard"
import { ChampionsData } from "../../interfaces";

interface Props {
  champions: ChampionsData[];
}

export const ChampionLastView:FC = ({champions}) => {
  
  const [championLastView, setChampionLastView] = useState({})

  const [checked, setChecked] = useState(true);

  const handleClick = () => {

    setChecked(!checked)
  }

  useEffect(()=> {
    const championLocalStorage = localStorage.getItem('ChampLastView') || '';

    if(championLocalStorage) {

      championLocalStorage = champions.filter( champion => champion.id === championLocalStorage);
      
      setChecked(true);
      return setChampionLastView(championLocalStorage[0])    
    }

  }, [])

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" >
        <Typography component="h2" variant="h4">Último campeón visto</Typography>
        <Button onClick={ handleClick } size="large" endIcon={ checked ? <KeyboardArrowUp /> : <KeyboardArrowDown /> }>
          { checked ? "Ocultar" :  "Mostrar" }
        </Button>
      </Stack>
      <Collapse in={checked}>
        <ChampionCard champion={championLastView} />
      </Collapse>
    </>
  )
}
