import React from 'react';

export default (props) => {

    return (
        <div style={{ marginLeft: 10 + 'px', marginTop: 20 + 'px', display: "inline-block" }}>
            <form onSubmit={props.values.update}>
                <div className="form-group" onBlur={props.values.verifyEmail}>
                    <label htmlFor="email">Correo eléctronico</label>
                    <textarea type="email" defaultValue={props.values.Company.Email} rows="1" className={props.values.isEmailValid === false ? "form-control error" : "form-control"} minLength="7" id="email" name="email" aria-describedby="emailHelp" placeholder="Introdcir correo eléctronico" disabled={props.values.isDisabled} required />
                    <small className={props.values.isEmailValid === false ? "text-danger" : "hidden"}>Correo eléctronico no valido</small>
                </div>
                <div className="form-group">
                    <label htmlFor="empresa">Sociedad/Empresa</label>
                    <textarea type="text" rows="1" value={props.values.Company.Empresa} className="form-control upperCase" id="empresa" name="empresa" placeholder="Sociedad o Empresa" required disabled={props.values.isDisabled} />
                </div>
                <div className="form-group" onBlur={props.values.verifyCIF} >
                    <label htmlFor="nif">NIF</label>
                    <textarea type="text" rows="1" value={props.values.Company.CIF} id="nif" maxLength="9" className={props.values.isCifValid === false ? "form-control error upperCase" : "form-control upperCase"} name="nif" placeholder="Número de identificación fiscal" required disabled={true} />
                    <small className={props.values.isCifValid === false ? "text-danger" : "hidden"}>NIF no válido, introduzca un NIF válido</small>
                </div>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                <span className="pointer btn btn-primary" onClick={props.values.setDisabledInput} >Editar datos</span>
            </form>
        </div>
    );

}