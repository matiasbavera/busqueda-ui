import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { FormularioBusqueda } from './FormularioBusqueda';
import { Data, TablaBusqueda } from './TablaBusqueda';
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

function createData(documento: string, nombre: string, apellido: string): Data {
  return { documento, nombre, apellido };
}

export const Busqueda = (props: any) => {
  const classes = useStyles();
  const lista = [createData('1', 'mati', 'b'), createData('2', 'john', 'doe')];
  const [listaMatch, setListaMatch] = React.useState([] as Data[])
  
  const handleFormRequest = (): void => {
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
        setListaMatch(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className={classes.formulario}>
        <FormularioBusqueda handleFormRequest={handleFormRequest}></FormularioBusqueda>
      </div>
      <Divider></Divider>
      <div className={classes.formulario}>
        <TablaBusqueda datos={listaMatch}></TablaBusqueda>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formulario: {
      padding: '1rem',
    },
  }),
);
