import { FC, useState } from "react"
import { Box, Button, Collapse, Grid, Stack, Typography } from "@mui/material";
//import { KeyboardArrowDown } from "@mui/icons-material"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import { IComments } from "../../../interfaces";
import { CommentsList } from "./CommentsList";


interface Props {
  comments: IComments[];
}

export const Comments:FC<Props> = ({ comments }) => {
  return (
    <Grid 
      item
      xs={12}
      sx={{ mt: 2, mb: 1, display: 'flex', justifyContent: 'center'}}
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
        <Stack direction="row" alignItems="center" justifyContent="space-between" >
          <Typography component="h2" variant="h4">Todos los comentarios</Typography>
        </Stack>
        <Box sx={{ display: comments.length > 0 ? 'block' : 'none' }} >
          {
            comments.map( (comment, index) => (
              <CommentsList  key={index} comment={comment}/>
            ))
          }
        </Box>
        <Box sx={{ display: comments.length < 1 ? 'block' : 'none'}}>
          <Box 
            sx={{
              py: 1,
              px: 2,
              my: 2,
              backgroundColor: 'secondary.dark', 
              borderRadius: '10px',
            }}
          >
            <Typography component="h5" variant="h6" color="primary">
              No hay comentarios!.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
