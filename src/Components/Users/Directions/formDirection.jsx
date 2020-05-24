
import React from 'react';

export default (props) => {
    return (
        <div>
            <form style={{ padding: 1 + '%', margin: 'auto' }}>
            <button type="button" className="close text-danger" aria-label="Close" onClick={props.values.RemoveItem}>
                <span aria-hidden="true">&times;</span>
            </button>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion" className="form-control" minLength="7" required />
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="numero">Nº</label>
                        <input type="text" id="numero" pattern="[0-9]" name="numero" defaultValue="" className="form-control" minLength="1" required />
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="letra">Letra</label>
                        <input type="text" id="letra" name="letra" defaultValue="" className="form-control" minLength="1" />
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="Piso">Piso</label>
                        <input type="text" id="Piso" pattern="[0-9]" name="Piso" defaultValue="" className="form-control" minLength="1" />
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="local">Local</label>
                        <input type="text" id="local" pattern="[0-9]" name="local" defaultValue="" className="form-control" minLength="1" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Provincia</label>
                        <select id="inputState" name="provincia" className="form-control" disabled>
                            <option defaultChecked={true}>Barcelona</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="poblacion">Población</label>
                        <select name="poblacion" id="poblacion" className="form-control" required>
                            <option></option>
                            {props.values.Towns?.map((town, index) => <option key={index}>{town}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">Código postal</label>
                        <input type="text" className="form-control" minLength="3" id="inputZip" required />
                    </div>
                </div>
                <input type="hidden" value={props.tipoDireccion} name="tipoDireccion" />
                <input type="hidden" value={props.direction?.iddirection} name="IdDirection" />
                <button  type="button" onClick={props.values.AddDirection} className="btn btn-primary">Guardar cambios</button>
                <span className="pointer btn btn-primary">Editar datos</span>
            </form>
        </div>)
}