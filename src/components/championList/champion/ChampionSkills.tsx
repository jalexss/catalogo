import { FC } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { ChampionData } from "../../../interfaces";


interface TProps {
  champion: ChampionData;
}

export const ChampionSkills:FC<TProps> = ({champion}) => {
  return (
    <Grid 
      item 
      xs={12} 
      sx={{ mb: 2, display: 'flex', justifyContent: 'center'}}
    >
      <Grid
        component="div"
        sx={{
          width: { xs: '100%', lg: '80%' },
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: 'primary.light',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography sx={{mb: 2}} color="primary" component="h1" variant="h4" >Habilidades</Typography>
        <Stack 
          direction="row" 
          spacing={2} 
          alignItems="center" 
          sx={{
            mb: 1,
            p: 1,
            backgroundColor: 'secondary.dark',
            borderRadius: '10px',
          }}
        >
          <Stack minWidth='35%' alignItems="center" >
            <Typography align="center" component="p" variant="h6" sx={{lineHeight: 1.1}} >{champion.passive.name}</Typography>
            <Typography align="center" component="p" variant="overline" color="primary.light">Pasiva</Typography>
          </Stack>
          <Typography 
            align="justify" 
            component="p" variant="body2" 
            sx={{ lineHeight: 1.1, p: 1 }}
          >
            {champion.passive.description}
          </Typography>
        </Stack>

        {
          champion.spells.map( (spell, index) => (
            <Stack
              key={ spell.id } 
              direction="row" 
              spacing={2} 
              alignItems="center" 
              sx={{
                mb: 1,
                p: 1,
                backgroundColor: 'secondary.dark',
                borderRadius: '10px',
              }}
            >
              <Stack spacing={-1} minWidth= '35%' sx={{ p: 1 }}>
                <Typography align="center" component="p" variant="h6" sx={{lineHeight: 1.1}} >{spell.name}</Typography>
                <Typography 
                  align="center" 
                  component="p" 
                  variant="overline" 
                  color="primary.light"
                >
                  { index === 0 ? 'Q' : index === 1 ? 'W' : index === 2 ? 'E' : 'ULTIMATE' }
                </Typography>
              </Stack>
              <Typography 
                align="justify" 
                component="p" variant="body2" 
                sx={{ lineHeight: 1.1, p: 1 }}
              >
                {spell.description}
              </Typography>
            </Stack>
          ))
        }
      </Grid>
    </Grid>
  )
}
