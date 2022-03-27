import React from 'react';
import NuevoProyecto from '../projects/NuevoProyecto';
import ListadoProyectos from '../projects/Listado';

const Sidebar = () => {
    return(
        <aside>
            <h1>Admin<span>Projects</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
    );
}

export default Sidebar;