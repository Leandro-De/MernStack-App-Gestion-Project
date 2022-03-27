import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'tienda'},
        {nombre: 'tienda'},
        {nombre: 'tienda'}
    ]
    return(
        <ul className='Listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;