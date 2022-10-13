import { FC } from "react"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { ChampionsData } from "../../interfaces";

interface TProps {
  champion: ChampionsData;
}

export const ChampionCard:FC<TProps> = ({ champion }) => {

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
    >
      <Card sx={{ maxWidth: 425 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={champion.image}
            alt={champion.name}
          />
          <CardContent>
            <Typography component="h1" variant="h5" >{champion.title}</Typography>
            <Typography component="h2" variant="subtitle2" >{champion.name}</Typography>
            <Typography align="justify" component="h2" variant="body2" >{champion.blurb}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
 