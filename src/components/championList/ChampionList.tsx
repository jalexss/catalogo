import { FC } from "react";
import { Grid } from "@mui/material";

import { ChampionsData } from "../../interfaces";
import { ChampionCard } from "../championCard/ChampionCard"

interface TProps {
  champions: ChampionsData[];
}

export const ChampionList:FC<TProps> = ({ champions }) => {

  return (
    <Grid
      container
      flexDirection="row"
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="center"
    >
      {
        champions.map(champion => (
          <ChampionCard champion={champion} key={champion.key} />
        ))
      }
    </Grid>
  )
}
