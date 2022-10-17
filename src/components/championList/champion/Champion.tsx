import { FC } from "react"
import { Box, Grid, Rating, Stack, Typography } from "@mui/material"
import { ChampionData } from "../../../interfaces";

interface TProps {
  champion: ChampionData;
}

export const Champion:FC<TProps> = ({champion}) => {
  return (
    <>
      <Grid item xs={12} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
        <Grid
          component="img"
          sx={{
            width: { xs: '100%', md: 900},
            maxHeight: { xs: 400, md: 900 },
          }}
          src={ champion.image.default } 
          alt={`Default visual art - ${champion.id}`} 
        />
      </Grid>

      <Grid 
        item 
        xs={12} 
        sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
      >
        <Grid
          component="div"
          sx={{
            width: { xs: '100%', md: 900 },
            p: 2,
            border: 1,
            borderRadius: '10px',
            borderColor: 'primary.light',
            backgroundColor: 'secondary.main',
          }}
        >
          <Typography color="primary" component="h1" variant="h4" >{champion.name}, {champion.title}</Typography>
          <Typography align="justify" color="grey.50" component="p" variant="body1" >{champion.lore}</Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12} 
        sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
      >
        <Grid
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { xs: '100%', md: '45%' },
            height: '100%',
            p: 2,
            border: 1,
            borderRadius: '10px',
            borderColor: 'primary.light',
            backgroundColor: 'secondary.main',
          }}
        >
          <Stack direction="row" spacing={2}>
            <Box
              component="img"
              src={champion.image.loadingScreen}
              alt={`Pantalla de carga de ${champion.name}`}
              sx={{
                width: { xs: '60%', md: 250},
                maxHeight: { xs: 300, md: 450 },
              }}
            />
            <Stack>
              <Typography component="h2" variant="h4" color="primary">Información:</Typography>
            
              <Stack spacing={ 4 } sx={{ mt: 2 }}>
                <Typography color="grey.50" component="p" variant="h6">Attack: {champion.info.attack}</Typography>
                <Typography color="grey.50" component="p" variant="h6" >Defense: {champion.info.defense}</Typography>
                <Typography color="grey.50" component="p" variant="h6" >Magic: {champion.info.magic}</Typography>
                <Stack spacing={1} alignItems="revert">
                  <Typography color="primary" component="p" variant="h4" >Difficulty: </Typography>
                  <Rating size="large" name="Champion difficulty" value={champion.info.difficulty} readOnly />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
        <Grid
          component="div"
          sx={{
            width: { xs: '100%', md: 900 },
            p: 2,
            display: champion.allytips.length > 0 ? 'block' : 'none',
            border: 1,
            borderRadius: '10px',
            borderColor: '#76ff03',
            backgroundColor: 'secondary.main',
          }}
        >
          <Typography color="#76ff03" component="h2" variant="h4" >{`Consejos para ${champion.name} como equipo:`}</Typography>
          
          {
            champion.allytips.map( (tip, index) => (
              <Typography
                key={index} 
                align="justify" 
                color="grey.50" 
                component="p" 
                variant="body1"
                sx={{ mb: 1 }} 
              >
                {`${index+1})`} {tip}
              </Typography>
            ))
          }
        </Grid>
      </Grid>

      <Grid 
        item 
        xs={12} 
        sx={{ mb: 2, display: 'flex', justifyContent: 'center' }} >
        <Grid
          component="div"
          sx={{
            width: { xs: '100%', md: 900 },
            display: champion.enemytips.length > 0 ? 'block' : 'none',
            p: 2,
            border: 1,
            borderRadius: '10px',
            borderColor: '#e64a19',
            backgroundColor: 'secondary.main',
          }}
        >
          <Typography color="#e64a19" component="h2" variant="h4" >{`Consejos para ${champion.name} como enemigo:`}</Typography>
          
          {
            champion.enemytips.map( (tip, index) => (
              <Typography
                key={index} 
                align="justify" 
                color="grey.50" 
                component="p" 
                variant="body1"
                sx={{ mb: 1 }} 
              >
                {`${index+1})`} {tip}
              </Typography>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}
