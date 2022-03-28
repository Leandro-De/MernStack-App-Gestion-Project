import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/proyectos/tareas/tareaContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea} = tareasContext;

    // detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaseleccionada]);

    // State del formularoio
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // estraer el nombre del proyecto
    const {nombre} = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // si es edicion o si es nueva tarea
        if(tareaseleccionada === null){  
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            actualizarTarea(tarea);
        }

        // obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar form
        guardarTarea({
            nombre:''
        })
    }

    return(
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre' 
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className='btn btn-block btn-primario btn-submit'
                        value={tareaseleccionada ? 'Editar tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className='mensaje error'>El nombre es obligatorio</p> : null }
        </div>
    );
}

export default FormTarea;