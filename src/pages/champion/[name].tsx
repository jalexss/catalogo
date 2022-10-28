import { FC, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Grid } from "@mui/material"

import { championApi } from "../../api";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper"
import { IChampion, ChampionData, ChampionListResponse, IComments } from "../../interfaces";
import { Champion } from "../../components/championList/champion/Champion";
import { ChampionComments } from "../../components/championList/championComments/ChampionComments";
import { getCommentsByChampion } from "../../database";

interface TProps {
  champion: ChampionData;
  comments: IComments[];
}

const ChampionInfoPage:FC<TProps> = ({ champion, comments }) => {
  
  useEffect(()=> {

    localStorage.setItem('ChampLastView', champion.id)
  }, [champion.id])

  return (
    <ApplicationWrapper 
      title={`Campeon - ${champion.name}`}
      description={`contenido acerca del campeon ${champion.name}`}
    >
      <Grid container justifyContent="center" direction='column' spacing={0}>
        <Champion champion={champion} />
        <ChampionComments comments={comments} championId={champion.id} />
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
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  try{
    const { data }= await championApi.get<IChampion>(`/12.19.1/data/es_MX/champion/${name}.json`)
    
    const championDetails = Object.values(data.data).map(champion=>({ 
      ...champion,
      images: {
        default: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
        loadingScreen: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`,
      },
    }))

    const champion: ChampionData = championDetails[0] ;

    const comments = await getCommentsByChampion(name);

    return {
      props: {
        champion,
        comments
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