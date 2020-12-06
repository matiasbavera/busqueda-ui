import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { BusquedaQueryProps } from './Busqueda';

interface FormularioBusquedaProps {
  handleFormRequest(query:BusquedaQueryProps):void;
}

export const FormularioBusqueda = (props: FormularioBusquedaProps) => {
  const {handleFormRequest}=props;
  const [ci, setCi] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  
  const [errorCi, setErrorCi] =  React.useState('');
  const [errorNombre, setErrorNombre] =  React.useState('');
  const [errorApellido, setErrorApellido] =  React.useState('');

  const cleanForm = ()=>{
    setErrorCi('');
    setErrorNombre('');
    setErrorApellido('')
  }

  const isFormValid = (): boolean =>{
    cleanForm();
    let isValid = true;
    if (ci === '' && nombre === '' && apellido === ''){
      setErrorCi('No puede estar vacío');
      setErrorNombre('No puede estar vacío');
      setErrorApellido('No puede estar vacío'); 
      isValid = false;
    }
    return isValid
  }

  const formRequest = (e:any):void =>{
    e.preventDefault();
    if (isFormValid()){
      handleFormRequest(
        {
          ci: ci,
          nombre: nombre,
          apellido: apellido,
          nombre_apellido: `${nombre} ${apellido}`,
        }
      );
      cleanForm();
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
      <IconButton id="buscar-btn" color="primary" onClick={(e)=>formRequest(e)}>
        <SearchIcon />
      </IconButton>
    </form>
  );
};
