import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const apiUrl = 'http://0.0.0.0:8000/persona/buscar/';
let crf_token = $("[name=csrfmiddlewaretoken]").val();
console.log('token ', crf_token)

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export const FormularioBusqueda = (props: any) => {
  const handleFormRequest = (): void => {
    console.log('entre');

    axios({
      method: 'post',
      url: `${apiUrl}`,
      headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": crf_token
      },
      data: {nombre_apellido: 'hola'}
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form>
      <TextField label={'CI'} variant="outlined"></TextField>
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
