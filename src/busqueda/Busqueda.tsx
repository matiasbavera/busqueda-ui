import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { FormularioBusqueda } from './FormularioBusqueda';
import { Data, TablaBusqueda } from './TablaBusqueda';
import axios from 'axios';
import { REACT_APP_URL } from '../app-config';
import { getCookie } from '../utils/cookies';

const csrftoken = getCookie('csrftoken');

function createData(ci: string, nombre: string, apellido: string): Data {
  return { ci, nombre, apellido };
}

export interface BusquedaQueryProps {
  ci?: string;
  nombre?: string;
  apellido?: string;
  nombre_apellido?:string;
}

export const Busqueda = (props: any) => {
  const classes = useStyles();
  const lista = [createData('1', 'mati', 'b'), createData('2', 'john', 'doe')];
  const [listaMatch, setListaMatch] = React.useState([] as Data[])
  const apiUrl = `${REACT_APP_URL}/persona/buscar/`;
  
  const handleFormRequest = (query:BusquedaQueryProps): void => {
    console.log(query)
    axios({
      method: 'get',
      url: `${apiUrl}`,
      headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": csrftoken
      },
      params: query
    })
      .then(function (response) {
        console.log(response);
        setListaMatch([])
        setListaMatch(response.data)
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
