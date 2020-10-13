import { TextField } from '@material-ui/core';
import React from 'react';

export const FormularioBusqueda =(props:any) =>{
    return (
        <>
          <TextField label={'Nombres'}></TextField>
          <TextField label={'Apellido'}></TextField>
          <TextField label={'Caso'}></TextField>
          <TextField label={'Despacho'}></TextField>
          <TextField label={'ID. Documento'}></TextField>
        </>
    )
}

