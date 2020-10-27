import { Divider } from '@material-ui/core'
import React from 'react'
import { FormularioBusqueda } from './FormularioBusqueda'
import { Data, TablaBusqueda } from './TablaBusqueda'


function createData(
    documento: string,
    nombre: string,
    apellido: string,
  ): Data {
    return { documento, nombre, apellido };
  }

export const Busqueda = (props:any) =>{
      
      const lista = [
        createData('1','mati', "b"),
        createData('2', 'john', 'doe'),
      ];
    return(
        <>
        <FormularioBusqueda></FormularioBusqueda>
        <Divider></Divider>
        <TablaBusqueda datos={lista}></TablaBusqueda>
        </>
    )
}