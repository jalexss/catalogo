import { FC } from "react"
import { useRouter } from "next/router";

import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

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
      xs={12}
      sm={6}
      md={5}
      lg={4}
      sx={{ display: 'flex', justifyContent: 'center'}}
    >
      <Card 
        id={champion.name} 
        sx={{
          display: 'flex',
          maxWidth: 425, 
          height: '100%', 
          backgroundColor: 'secondary.main',
        }} >
        <CardActionArea onClick={onClick} >
          <CardMedia
            component="img"
            width="100%"
            height="240"
            image={champion.image}
            alt={champion.name}
          />
          <CardContent >
            <Typography 
              color="primary" 
              align="center" 
              component="h1" 
              variant="h6"
              sx={{ lineHeight: 1.1, }} 
            >
              {champion.name}, {champion.title}
            </Typography>
            <Typography align="justify" component="h2" variant="body2" >{champion.blurb}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
 