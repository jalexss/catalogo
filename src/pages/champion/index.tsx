import { NextPage, GetStaticProps } from "next";

import { ChampionList } from "../../components/championList/ChampionList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper"
import championApi from '../../api/championApi';
import { ChampionListResponse, ChampionsData } from "../../interfaces";
import { ChampionLastView } from "../../components/championLastView/ChampionLastView";
import { Box } from "@mui/material";

interface TProps {
  champions: ChampionsData[]; //TODO: CAMBIAR
}

const championPage: NextPage<TProps> = ({ champions }) => {
  return (
    <ApplicationWrapper 
      title="Lista de los campeones" 
      description="Lista de los campeones del parche 12.19.1" 
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <ChampionLastView champions={champions} />
        <ChampionList champions={champions} />
      </Box>
    </ApplicationWrapper>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await championApi.get<ChampionListResponse>('/12.19.1/data/es_MX/champion.json')

  const champions: ChampionsData[] = Object.values(data.data).map( (champion)=> ({
      blurb: champion.blurb,
      id: champion.id,
      key: champion.key,
      name: champion.name,
      title: champion.title,
      image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
    })
  )

  return {
    props: {
      champions
    }
  }
}


export default championPage