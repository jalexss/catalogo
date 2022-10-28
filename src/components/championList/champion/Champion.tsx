import { FC } from "react"
import router from "next/router";
import { Grid, Button } from "@mui/material";
import { ChampionData } from "../../../interfaces";
import { 
  ChampionDefaultImage, 
  ChampionDescription, 
  ChampionInformation, 
  ChampionAllyTips,
  ChampionEnemyTips,
  ChampionTags,
  ChampionSkills,
  ChampionStats, 
} from "./";


interface TProps {
  champion: ChampionData;
}

export const Champion:FC<TProps> = ({champion}) => {
  return (
    <>
      <Grid 
        item 
        xs={12} 
        sx={{ ml: { xs: 0, lg: 16 }, my: 1, display: 'flex', justifyContent: 'flex-start' }}
      >
        <Button variant="contained" onClick={ ()=> router.push('/champion') }>Regresar</Button>
      </Grid>

      <ChampionDefaultImage champion={champion} />

      <ChampionDescription champion={champion} />

      <ChampionInformation champion={champion} />

      <ChampionTags champion={champion} />

      <ChampionStats champion={champion} />

      <ChampionSkills champion={champion} />

      <ChampionAllyTips champion={champion} />

      <ChampionEnemyTips champion={champion} />
    </>
  )
}
