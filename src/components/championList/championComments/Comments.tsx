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

  const [checked, setChecked] = useState(false);

  const handleClick = () => {

    setChecked(!checked)
  }

  return (
    <Grid 
      item
      xs={12}
      sx={{ my: 2, display: 'flex', justifyContent: 'center'}}
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
          <Button onClick={ handleClick } size="large" endIcon={ checked ? <KeyboardArrowUp /> : <KeyboardArrowDown /> }>
            { checked ? "Ocultar" :  "Mostrar" }
          </Button>
        </Stack>
        <Collapse in={checked}>
        <Box>
          {
            comments.map( (comment, index) => (
              <CommentsList  key={index} comment={comment}/>
            ))
          }
        </Box>
        </Collapse>
      </Grid>
    </Grid>
  )
}
