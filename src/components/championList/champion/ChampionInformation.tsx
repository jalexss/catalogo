import { Box, Grid, Rating, Stack, Typography } from "@mui/material"
import { FC } from "react"
import { ChampionData } from "../../../interfaces"

interface TProps {
  champion: ChampionData
}

export const ChampionInformation:FC<TProps> = ({champion}) => {
  return (
    <Grid
      item
      xs={12} 
      sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
    >
      <Grid
        component="div"
        sx={{
          display: 'flex',
          direction: 'row',
          justifyContent: 'space-around',
          width: { xs: '100%', sm: '80%', md: '60%' }, 
          maxHeight: { xs: 380, md: 400, lg: 500 },
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: 'primary.light',
          backgroundColor: 'secondary.main',
        }}
      >

          <Box
            component="img"
            src={champion.images.loadingScreen}
            alt={`Pantalla de carga de ${champion.name}`}
            sx={{
              width: { xs: '40%', md: '30%' },
              height: '100%',
              borderRadius: '10px',
            }}
          />
          <Stack>
            <Typography component="h2" variant="h4" color="primary">Información:</Typography>
          
            <Stack spacing={ 2 } sx={{ mt: 2 }}>
              <Typography component="p" variant="h6">Attack: {champion.info.attack}</Typography>
              <Typography component="p" variant="h6" >Defense: {champion.info.defense}</Typography>
              <Typography component="p" variant="h6" >Magic: {champion.info.magic}</Typography>
              <Stack direction="row" spacing={2}>
                <Typography component="p" variant="h6" >Recursos: </Typography>
                <Typography component="p" variant="h6" color="primary">{champion.partype}</Typography>
              </Stack>
              <Stack spacing={1} alignItems="revert">
                <Typography color="primary" component="p" variant="h4" >Difficulty: </Typography>
                <Rating size="large" name="Champion difficulty" value={champion.info.difficulty} readOnly />
              </Stack>
            </Stack>
          </Stack>
      </Grid>
    </Grid>
  )
}
