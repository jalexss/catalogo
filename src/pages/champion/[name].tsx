import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Grid } from "@mui/material"

import { championApi } from "../../api";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper"
import { IChampion, ChampionData, ChampionListResponse } from "../../interfaces";
import { Champion } from "../../components/championList/champion/Champion";

interface TProps {
  champion: ChampionData;
}

const ChampionInfoPage:FC<TProps> = ({ champion }) => {
  console.log(champion)
  return (
    <ApplicationWrapper 
      title={`Campeon - ${champion.name}`}
      description={`contenido acerca del campeon ${champion.name}`}
    >
      <Grid container>
        <Champion champion={champion} />
      </Grid>
    </ApplicationWrapper>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const {data} = await championApi.get<ChampionListResponse>('/12.19.1/data/es_MX/champion.json')

  const championNames: string[] = Object.values(data.data).map( (champion)=> ( champion.id ))

  return {
    paths: championNames.map( name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  try{
    const { data }= await championApi.get<IChampion>(`/12.19.1/data/es_MX/champion/${name}.json`)
    
    const championDetails = Object.values(data.data).map(champion=>({ 
      ...champion,
      image: {
        default: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
        loadingScreen: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
      },
    }))

    const champion: ChampionData = championDetails[0] ;

    return {
      props: {
        champion
      }
    }

  } catch(error) {
    return {
      redirect: {
        destination: '/champion',
        permanent: false
      }
    }
  }
}


export default ChampionInfoPage