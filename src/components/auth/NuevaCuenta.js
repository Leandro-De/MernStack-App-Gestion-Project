import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password:'',
        confirmar:''
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Password minimo 6 caracteres

        // Los 2 passwords iguales

        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id='nombre'
                            value={nombre}
                            name='nombre'
                            placeholder='Tu Nombre'
                            onChange={onChange}
                         />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id='email'
                            value={email}
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                         />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Pasword</label>
                        <input 
                            type="password"
                            id='password'
                            value={password}
                            name='password'
                            placeholder='Tu password'
                            onChange={onChange}
                         />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Pasword</label>
                        <input 
                            type="password"
                            id='confirmar'
                            value={confirmar}
                            name='confirmar'
                            placeholder='Repite tu password'
                            onChange={onChange}
                         />
                    </div>

                    <div className="campo-for">
                        <input 
                            type="submit"
                            className='btn btn-primario btn-block'
                            value='Crear Cuenta' />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;