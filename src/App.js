import React from 'react';


// Importar Componentes
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/projects/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/proyectos/tareas/tareaState';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
            <Route exact path='/proyectos' component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
      
  );
}

export default App;
