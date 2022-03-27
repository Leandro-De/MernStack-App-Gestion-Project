import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} =  proyectosContext;

    useEffect(() => {
        obtenerProyectos();
    }, []); 

    // Revisar si el proyecto viene vacio
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return(
        <ul className='Listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;