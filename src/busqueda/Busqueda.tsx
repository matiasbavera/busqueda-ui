import React from 'react'
import { FormularioBusqueda } from './FormularioBusqueda'
import { TablaBusqueda } from './TablaBusqueda'

export const Busqueda = (props:any) =>{
    return(
        <>
        <FormularioBusqueda></FormularioBusqueda>
        <TablaBusqueda></TablaBusqueda>
        </>
    )
}