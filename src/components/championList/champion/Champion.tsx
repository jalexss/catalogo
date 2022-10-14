import { FC } from "react"
import { Grid, Typography } from "@mui/material"
import { ChampionData } from "../../../interfaces";

interface TProps {
  champion: ChampionData;
}

export const Champion:FC<TProps> = ({champion}) => {
  return (
    <>
      <Grid>
        <Typography>{champion.lore}</Typography>
        <img src={champion.image.default} alt={champion.name} />
      </Grid>
    </>
  )
}
