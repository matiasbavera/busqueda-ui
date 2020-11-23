import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

interface FormularioBusquedaProps {
  handleFormRequest():void;
}

export const FormularioBusqueda = (props: FormularioBusquedaProps) => {
  const {handleFormRequest}=props;
  const [ci, setCi] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  
  const [errorCi, setErrorCi] =  React.useState('');
  const [errorNombre, setErrorNombre] =  React.useState('');
  const [errorApellido, setErrorApellido] =  React.useState('');


  const isFormValid = (): boolean =>{
    let isValid = true;
    if (ci === '' && nombre === '' && apellido === ''){
      isValid = false;
    }
    return isValid
  }

  const formRequest = ():void =>{
    if (isFormValid()){
      handleFormRequest();
    }

  }

  return (
    <form>
       <TextField
          id="ci"
          name="ci"
          onChange={(e) => {
            setCi(e.target.value);
          }}
          placeholder="Numero de documento"
          type="string"
          value={ci || ''}
          // className={classes.input}
          label="Numero de documento"
          variant="outlined"
          error={!!errorCi}
          helperText={errorCi}
        />

        <TextField
          id="nombre"
          name="nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          placeholder="Nombre"
          type="string"
          value={nombre || ''}
          // className={classes.input}
          label="Nombre"
          variant="outlined"
          error={!!errorNombre}
          helperText={errorNombre}
        />

        <TextField
          id="apellido"
          name="apellido"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
          placeholder="Apellido"
          type="string"
          value={apellido || ''}
          // className={classes.input}
          label="Apellido"
          variant="outlined"
          error={!!errorApellido}
          helperText={errorApellido}
        />
      {/* <TextField label={'Caso'}></TextField>
            <TextField label={'Despacho'}></TextField>
            <TextField label={'ID. Documento'}></TextField> */}
      <IconButton id="buscar-btn" color="primary" onClick={handleFormRequest}>
        <SearchIcon />
      </IconButton>
    </form>
  );
};
