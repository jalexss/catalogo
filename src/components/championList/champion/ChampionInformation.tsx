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
  )
}
