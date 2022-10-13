import { FC } from "react"
import { useRouter } from "next/router";

import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";

import { ChampionsData } from "../../interfaces";

interface TProps {
  champion: ChampionsData;
}

export const ChampionCard:FC<TProps> = ({ champion }) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/champion/${champion.id}`)
  }

  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      lg={4}
    >
      <Card 
        id={champion.name} 
        sx={{ 
          maxWidth: 425, 
          height: 425, 
          backgroundColor: 'secondary.main',
        }} >
        <CardActionArea onClick={onClick} >
          <CardMedia
            component="img"
            height="240"
            image={champion.image}
            alt={champion.name}
          />
          <CardContent >
            <Typography color="primary.light" align="center" component="h1" variant="h6" >{champion.title}</Typography>
            <Typography color="primary" align="justify" component="h2" variant="body2" >{champion.blurb}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
 