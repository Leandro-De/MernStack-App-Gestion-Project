import React, { useReducer } from 'react';

import {v4 as uuid } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReduce from './proyectoReduce';
import {
    FORMULARIO_PROYECTO,
     OBTENER_PROYECTOS,
     AGREGAR_PROYECTO,
     VALIDAR_FORMULARIO,
     PROYECTO_ACTUAL,
     ELIMINAR_PROYECTO
    } from '../../types';

     
 const ProyectoState = props => {
    
    const proyectos = [
        { id: 1, nombre: 'tienda'},
        { id: 2, nombre: 'tienda'},
        { id: 3, nombre: 'xd'}
    ]

    const initialState = {
        proyectos: [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReduce, initialState)

    // Serie de funcioes para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        // Insetar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Valida el formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;