import React from 'react';

export default (props) => {
    return (
            <div className="customContainer">
                <form onSubmit={props.register}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="empresa">Sociedad/Empresa</label>
                        <input type="text" className="form-control" id="empresa" name="empresa" placeholder="Sociedad o Empresa" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cif">CIF</label>
                        <input type="text" className="form-control" id="cif" name="cif" placeholder="Código de identificación fiscal" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" required/>
                        <small id="password" className="form-text text-muted">mostrar algún error con la password</small>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="conditions" id="conditions" required/>
                        <label className="form-check-label" htmlFor="conditions">Acepta las condiciones del servicio</label>
                    </div>
                    <button onClick={props.redirect} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}