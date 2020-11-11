import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

interface FormularioBusquedaProps {
  handleFormRequest():void;
}

export const FormularioBusqueda = (props: FormularioBusquedaProps) => {
  const {handleFormRequest}=props;
  
  return (
    <form>
       <TextField
          id="ci"
          name="ci"
          onChange={(e) => {
            setCi(!!e.target.value ? parseInt(e.target.value) : 0);
          }}
          placeholder="Numero de documento"
          type="string"
          value={ci || ''}
          // className={classes.input}
          label="Numero de documento"
          variant="outlined"
          error={!!ciError}
          helperText={ciError}
        />
      {/* <TextField label={'CI'} variant="outlined"></TextField> */}
      <TextField label={'Nombres'} variant="outlined"></TextField>
      <TextField label={'Apellidos'} variant="outlined"></TextField>
      {/* <TextField label={'Caso'}></TextField>
            <TextField label={'Despacho'}></TextField>
            <TextField label={'ID. Documento'}></TextField> */}
      <IconButton id="buscar-btn" color="primary" onClick={handleFormRequest}>
        <SearchIcon />
      </IconButton>
    </form>
  );
};
