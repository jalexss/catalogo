import { ChangeEventHandler, FC, FormEvent, useEffect, useState } from "react"
import { Button, Chip, Grid, TextField, Typography } from '@mui/material';

import { useForm } from "../../../hooks/useForm";
import { IComment } from "../../../interfaces";
import { comentariosApi } from "../../../api";

interface Props{
  championId: string;
  onCommentsUpdate: Function;
  isLoading: boolean;
  isLoadingActive: Function;
}

export const CreateComment:FC<Props> = ({ championId, onCommentsUpdate, isLoading, isLoadingActive }) => {

  const [ inputValues, handleInputChange, valuesWithLength ] = useForm({
    comment: '',
    username: '',
    email: '',
  })

  const [ error, setError ] = useState(false);

  const { comment, username, email } = inputValues as IComment;

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    isLoadingActive(true);

    const newData = {
      comment, 
      username, 
      email,
      championId: championId
    };

    if( valuesWithLength.comment < 1 || valuesWithLength.username < 1 || valuesWithLength.email < 1 ) {

      return setError(true);
    }

    try {
      const { data }  = await comentariosApi.post<IComment>(`/comments`, newData);
      if( data.ok ) {
        onCommentsUpdate();
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if( valuesWithLength.comment > 0 || valuesWithLength.username > 0 || valuesWithLength.email > 0 ) {

      return setError(false);
    }
  }, [valuesWithLength.comment, valuesWithLength.username, valuesWithLength.email])

  return (
    <Grid 
      item
      autoComplete="off"
      component="form"
      onSubmit={ handleSubmit }
      xs={12}
      sx={{
        display: 'flex', justifyContent: 'center'
      }}
    >
      <Grid
        component="div"
        sx={{
          width: { xs: '100%', lg: '80%' },
          p: 2,
          border: 1,
          borderRadius: '10px',
          borderColor: 'success.main',
          backgroundColor: 'secondary.main'
        }}
      >
        <Typography component="h3" variant="h4">Quieres comentar algo?</Typography>

        <TextField
          name="comment"
          variant="filled"
          color="success"
          multiline
          rows={3}
          fullWidth
          label="Quieres comentar algo?."
          error={ valuesWithLength.comment < 1 && error }
          value={ comment }
          onChange={ handleInputChange as ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>  }
          inputProps={{
            minLength: "10",
            maxLength:"344"
          }}
          sx={{
            my: 2,
            borderRadius: '5px',
            backgroundColor: 'secondary.light',
          }}
        />
        <TextField
          color="success"
          variant="filled"
          name="username"
          fullWidth
          label="Escribe un nombre"
          error={ valuesWithLength.username < 1 && error }
          value={ username }
          onChange={ handleInputChange as ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> }
          inputProps={{
            minLength: "1",
            maxLength:"30"
          }}
          sx={{
            my: 2,
            borderRadius: '5px',
            backgroundColor: 'secondary.light',
          }}
        />
        <TextField
          color="success"
          variant="filled"
          name="email"
          type="email"
          helperText="* El email no se mostrara publicamente *"
          fullWidth
          label="Escribe tu email"
          error={ valuesWithLength.email < 1 && error }
          value={ email }
          onChange={ handleInputChange as ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> }
          sx={{
            my: 2,
            borderRadius: '5px',
            backgroundColor: 'secondary.light',
          }}
        />

        <Chip 
          label="Todos los campos son obligatorios!" 
          color="error" 
          sx={{ 
            my:1, 
            display: error ? 'flex' : 'none' 
          }} 
        />

        <Button disabled={isLoading} fullWidth color="success" variant="contained" type="submit" >
          Enviar!
        </Button> 
      </Grid>
    </Grid>
  )
}
