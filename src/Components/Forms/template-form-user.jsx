import React from 'react';

export default (props) => {
    return (
            <div className="customContainer">
                <form onSubmit={props.register}>
                    <div className="form-group" onBlur={props.verifyEmail}>
                        <label htmlFor="email">Correo eléctronico</label>
                        <input type="email" className={props.isEmailValid === false ? "form-control error":"form-control"} minLength="7" id="email" name="email" aria-describedby="emailHelp" placeholder="Introdcir correo eléctronico" required/>
                        <small className={props.isEmailValid === false ? "text-danger":"hidden"}>Correo eléctronico no valido</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="empresa">Sociedad/Empresa</label>
                        <input type="text" className="form-control upperCase" id="empresa" name="empresa" placeholder="Sociedad o Empresa" required/>
                    </div>
                    <div className="form-group" onBlur={props.verifyCIF} >
                        <label htmlFor="nif">NIF</label>
                        <input type="text" maxLength="9" className={props.isCifValid === false ? "form-control error upperCase":"form-control upperCase"} name="nif" placeholder="Número de identificación fiscal" required/>
                        <small className={props.isCifValid === false ? "text-danger":"hidden"}>NIF no válido, introduzca un NIF válido</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" minLength="6" id="password" name="password" placeholder="Contraseña" required/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="conditions" id="conditions" required/>
                        <label className="form-check-label" htmlFor="conditions">Acepta las condiciones del servicio</label>
                    </div>
                    <button  type="submit" className="btn btn-primary">Registrarme</button>
                </form>
            </div>
    )
}