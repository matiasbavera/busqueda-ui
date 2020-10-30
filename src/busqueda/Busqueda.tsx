import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { FormularioBusqueda } from './FormularioBusqueda';
import { Data, TablaBusqueda } from './TablaBusqueda';

function createData(documento: string, nombre: string, apellido: string): Data {
  return { documento, nombre, apellido };
}

export const Busqueda = (props: any) => {
  const classes = useStyles();
  const lista = [createData('1', 'mati', 'b'), createData('2', 'john', 'doe')];
  return (
    <>
      <div className={classes.formulario}>
        <FormularioBusqueda></FormularioBusqueda>
      </div>
      <Divider></Divider>
      <div className={classes.formulario}>
        <TablaBusqueda datos={lista}></TablaBusqueda>
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
