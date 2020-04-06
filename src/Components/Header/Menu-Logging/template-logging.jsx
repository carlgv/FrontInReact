import React from 'react';
import logging from './logging-index';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only">
                            (current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form onSubmit={logging.handleSubmitLogging} className="form-inline">
                    <div className="input-group">
                        <input type="text" name="username" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" />
                    </div>
                    <button onClick={logging.handleSubmitLogging} className="btn btn-outline-success my-2 my-sm-0" type="submit">Entrar</button>
                </form>
            </div>
        </nav>
    );
};