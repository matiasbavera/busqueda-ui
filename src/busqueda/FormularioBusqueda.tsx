import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/persona/buscar/';

function getCookie(name:any) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');
console.log('token ', csrftoken)

export const FormularioBusqueda = (props: any) => {
  const handleFormRequest = (): void => {
    console.log('entre');

    axios({
      method: 'post',
      url: `${apiUrl}`,
      headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": csrftoken
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
