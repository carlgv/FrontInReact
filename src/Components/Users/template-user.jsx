import React from 'react';
import DataUser from './index-user';
import Direction from './Directions/index-direction';
import Invoice from './Invoices/index-invoice';
import Contact from './Contact/index-contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export default (props, routes) => {

    if (props.values.Company != null) {
        return (
            <div>
                <div className="customContainer">
                    <ul className="nav nav-tabs">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Perfil/Empresa">
                                Empresa<span className="sr-only">
                                (current)</span>
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Perfil/Contacto">
                                Contacto
                           </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Perfil/Direcciones">
                                Direcciones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Perfil/Facturas">
                                Facturas
                            </Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/Perfil/Empresa" component={DataUser} />
                    <Route path="/Perfil/Contacto" component={Contact} />
                    <Route path="/Perfil/Direcciones" component={Direction} />
                    <Route path="/Perfil/Facturas" component={Invoice} />
                    <Redirect from="/Perfil" exact to="/Perfil/Empresa" />
                </Switch>
                </div>
        );
    }
    return null;
}