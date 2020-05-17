import React from 'react';

function ButtonSave(props) {
    if (props.data === null) {
        return <button type="submit" className="btn btn-primary" >Guardar</button>
    }
    else {
        return (
            <span>
                <button type="submit" className="btn btn-primary" >Guardar Cambios</button>
                <span className="pointer btn btn-primary" onClick={props.SetDisabled}>Editar datos</span>
            </span>
        )
    }
}

export default (props) => {
    var addOrUpdate = props.datos ? props.updateContact:props.addContact;
    return (
        < div style={{ marginLeft: 10 + 'px', marginTop: 20 + 'px', display: "inline-block" }}>
            <form onSubmit={addOrUpdate}>
                <div className="form-group">
                    <label htmlFor="Nombre">Nombre</label>
                    <textarea type="text"  rows="1" defaultValue={props.datos ? props.datos.Nombre:""} className="form-control" minLength="3" id="Nombre" name="nombre" aria-describedby="emailHelp" placeholder="Introducir Nombre" required disabled={props.datos !== null && props.Disabled ? true:false}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Apellidos">Apellidos</label>
                    <textarea type="text" rows="1" defaultValue={props.datos ? props.datos.Apellidos:""} className="form-control upperCase" minLength="3" id="Apellidos" name="apellidos" placeholder="Introducir Apellidos" required disabled={props.datos !== null && props.Disabled ? true:false}/>
                </div>
                <div className="form-group">
                    <label htmlFor="telf">Teléfono</label>
                    <input type="tel" id="telf" defaultValue={props.datos ? props.datos.Telephone:""} className="form-control" name="telf" placeholder="Introducir teléfono 1" minLength="9" maxLength="12" pattern="[0-9]*" required disabled={props.datos !== null && props.Disabled ? true:false}/>
                </div>
                <input id="usercontactid" value={props.datos ? props.datos.IdUserContact:0} type="hidden"/>
                <ButtonSave data={props.datos} SetDisabled={props.setDisabled}/>
            </form>
        </div >
    );
}