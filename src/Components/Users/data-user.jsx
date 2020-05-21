import React from 'react';

export default (props) => {

    return (
        <div className="customContainerUser">
        <div style={{ marginLeft: 10 + 'px', marginTop: 20 + 'px', display: "inline-block" }}>
            <form onSubmit={props.update}>
                <div className="form-group" onBlur={props.verifyEmail}>
                    <label htmlFor="email">Correo eléctronico</label>
                    <textarea type="email" defaultValue={props.Company.Email} rows="1" className={props.isEmailValid === false ? "form-control error" : "form-control"} minLength="7" id="email" name="email" aria-describedby="emailHelp" placeholder="Introdcir correo eléctronico" disabled={props.isDisabled} required />
                    <small className={props.isEmailValid === false ? "text-danger" : "hidden"}>Correo eléctronico no valido</small>
                </div>
                <div className="form-group">
                    <label htmlFor="empresa">Sociedad/Empresa</label>
                    <textarea type="text" rows="1" value={props.Company.Empresa} className="form-control upperCase" id="empresa" name="empresa" placeholder="Sociedad o Empresa" required disabled={props.isDisabled} />
                </div>
                <div className="form-group" onBlur={props.verifyCIF} >
                    <label htmlFor="nif">NIF</label>
                    <textarea type="text" rows="1" value={props.Company.CIF} id="nif" maxLength="9" className={props.isCifValid === false ? "form-control error upperCase" : "form-control upperCase"} name="nif" placeholder="Número de identificación fiscal" required disabled={true} />
                    <small className={props.isCifValid === false ? "text-danger" : "hidden"}>NIF no válido, introduzca un NIF válido</small>
                </div>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                <span className="pointer btn btn-primary" onClick={props.setDisabledInput} >Editar datos</span>
            </form>
        </div>
        </div>
    );

}