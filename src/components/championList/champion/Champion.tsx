import { FC } from "react"
import { ChampionData } from "../../../interfaces";
import { 
  ChampionDefaultImage, 
  ChampionDescription, 
  ChampionInformation, 
  ChampionAllyTips,
  ChampionEnemyTips, 
} from "./";


interface TProps {
  champion: ChampionData;
}

export const Champion:FC<TProps> = ({champion}) => {
  return (
    <>
      <ChampionDefaultImage champion={champion} />

      <ChampionDescription champion={champion} />

      <ChampionInformation champion={champion} />

      <ChampionAllyTips champion={champion} />

      <ChampionEnemyTips champion={champion} />
    </>
  )
}
