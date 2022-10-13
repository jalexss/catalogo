import { FC } from "react";
import { Grid } from "@mui/material";

import { ChampionsData } from "../../interfaces";
import { ChampionCard } from "../championCard/ChampionCard"

interface TProps {
  champions: ChampionsData[];
}

export const ChampionList:FC<TProps> = ({ champions }) => {

  console.log(champions)

  return (
    <Grid
      container
      spacing={3}
      flexDirection="row"
    >
      {
        champions.map(champion => (
          <ChampionCard champion={champion} key={champion.key} />
        ))
      }
    </Grid>
  )
}
