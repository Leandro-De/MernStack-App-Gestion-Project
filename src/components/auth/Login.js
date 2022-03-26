import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password:''
    });

    const {email, password} = usuario;

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

        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
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

                    <div className="campo-for">
                        <input 
                            type="submit"
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesion' />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Crea una Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;