import React from 'react';

export default () => {

    return (
        <div className="customContainerUser">
        < div style={{ marginLeft: 10 + 'px', marginTop: 20 + 'px', display: "inline-block" }}>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Correo eléctronico</label>
                    <textarea type="email"  rows="1" className="form-control" minLength="7" id="email" name="email" aria-describedby="emailHelp" placeholder="Introdcir correo eléctronico" required />
                </div>
                <div className="form-group">
                    <label htmlFor="empresa">Sociedad/Empresa</label>
                    <textarea type="text" rows="1" className="form-control upperCase" id="empresa" name="empresa" placeholder="Sociedad o Empresa" required/>
                </div>
                <div className="form-group" >
                    <label htmlFor="nif">NIF</label>
                    <textarea type="text" rows="1" id="nif" maxLength="9" className="form-control upperCase" name="nif" placeholder="Número de identificación fiscal" required />
                </div>
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                <span className="pointer btn btn-primary">Editar datos</span>
            </form>
        </div >
        </div >
    );
}