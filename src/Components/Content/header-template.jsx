import React from 'react';
import FormUser from '../Forms/form-index';
import Home from '../Home/home-index';
import User from '../Users/index-user';
import PageNotFound from './../pageNotFound';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Form(props) {
    if (props.isLogged === false) {
        return (
            <div>
                <div className="btn-group" >
                    <button type="button" className="btn btn-sm btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Iniciar sesion
                    </button>
                    <div id="formLogin" className="dropdown-menu dropdown-menu-right mt-2" >
                        <span  className="dropdown-item" >
                        <form onSubmit={props.onSubmit}>
                            <div className="form-group">
                                <input type="text" name="email" className="form-control" style={{width:300+'px'}} placeholder="Email" aria-label="email" aria-describedby="basic-addon1" required/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" required/>
                            </div>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Entrar</button>
                        </form>
                        </span>
                    </div>
                </div>
                <div className="btn-group" >
                    <Link to="/FormUser" className="nav-link">
                        <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Registrate</button>
                    </Link>
                </div>
            </div>
        );
    };
    return null;
}

function Welcome(props) {
    if (props.isLogged) {
        return (
            <div className="d-block">
                <span>
                    Bienvenido {props.Company.Empresa}
                </span>
                <Link to="/">
                    <button onClick={props.onLogOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                </Link>

                <Link to={"/User/" + props.Company.Empresa}>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">
                        Perfil
                        </button>
                </Link>
            </div>
        )
    }
    return null;
}

export default (props) => {
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" className="navbar-brand" >Emprede fruits</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home<span className="sr-only">
                                (current)</span>
                            </Link>
                        </li>
                    </ul>
                    <Form onSubmit={props.onSubmit} isLogged={props.isLogged} />
                    <Welcome isLogged={props.isLogged} Company={props.Company} onLogOut={props.onLogOut} />
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/FormUser">
                    <FormUser />
                </Route>
                <Route path={"/User/" + props.Company.Empresa}>
                    <User />
                </Route>
                <Route path='*' exact={true}>
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    )
};