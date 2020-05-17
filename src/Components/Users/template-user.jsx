import React from 'react';
import DataUser from './data-user';
import Direction from './Directions/index-direction';
import Invoice from './Invoices/index-invoice';
import Contact from './Contact/index-contact';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default (props) => {

    if (props.Company != null) {
        return (
            <Router>
                <div className="customContainer">
                    <ul className="nav nav-tabs">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Perfil/Empresa">
                                Empresa
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
                    <Route path="/Perfil/Empresa">
                        <div className="customContainer">
                            <DataUser values={props} />
                        </div>
                    </Route>
                    <Route path="/Perfil/Contacto">
                        <div className="customContainer">
                            <Contact />
                        </div>
                    </Route>
                    <Route path="/Perfil/Direcciones">
                        <div className="customContainer">
                            <Direction />
                        </div>
                    </Route>
                    <Route path="/Perfil/Facturas">
                        <div className="customContainer">
                            <Invoice />
                        </div>
                    </Route>
                </Switch>
                
            </Router>
        );
    }
    return null;
}