import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/proyectos/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // obtener el sate el formulario
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const {obtenerTareas} = tareasContext;

    // Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id) // Fijar un proyecto actual
        obtenerTareas(id) // filtar las tareas cuando se de click
    }

    return(
        <li>
            <button
                type='button'
                className='btn btn-black'
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
             {proyecto.nombre}   
            </button>
        </li>
    );
}

export default Proyecto;