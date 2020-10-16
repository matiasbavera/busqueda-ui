import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const FormularioBusqueda =(props:any) =>{
    return (
        <>
          <TextField label={'Nombres'}></TextField>
          <TextField label={'Apellidos'}></TextField>
          {/* <TextField label={'Caso'}></TextField>
          <TextField label={'Despacho'}></TextField>
          <TextField label={'ID. Documento'}></TextField> */}
          <IconButton id="buscar-btn" color="primary">
            <SearchIcon />
          </IconButton>
        </>
    )
}

