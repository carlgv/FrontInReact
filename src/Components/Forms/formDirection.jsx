
import React from 'react';
import { GetTowns } from '../../Utils/Direction/ServiceDirections';

export default (props) => {
    return (
        <div>
            <form style={{ padding: 1 + '%', margin: 'auto' }} onSubmit={props.AddDirection} >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" name="Direccion" defaultValue={props.DataDirection?.Direccion} className="form-control" minLength="7" required disabled={props.Disabled}/>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="numero">Nº</label>
                        <input type="text" id="numero" pattern="[0-9]" name="Numero" defaultValue={props.DataDirection?.NumeroCalle} className="form-control" minLength="1" required disabled={props.Disabled}/>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="letra">Letra</label>
                        <input type="text" id="letra" name="Letra" defaultValue={props.DataDirection?.Letra} className="form-control" minLength="1" disabled={props.Disabled}/>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="Piso">Piso</label>
                        <input type="text" id="Piso" pattern="[0-9]" name="Piso" defaultValue={props.DataDirection?.Piso} className="form-control" minLength="1" disabled={props.Disabled}/>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="local">Local</label>
                        <input type="text" id="local" pattern="[0-9]" name="Local" defaultValue={props.DataDirection?.Local} className="form-control" minLength="1" disabled={props.Disabled}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Provincia</label>
                        <select id="inputState" name="Provincia" onChangeCapture={props.onSelectProvince} value={props.DataDirection?.Provincia} className="form-control" disabled={props.Disabled}>
                            <option></option>
                            <option value="Barcelona" defaultChecked={true}>Barcelona</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="poblacion">Población</label>
                        <select value={props.DataDirection?.Poblacion} name="Poblacion" id="poblacion" className="form-control" required disabled={props.Disabled}>
                            <option></option>
                            {props.Towns?.map((town, index) => <option key={index}>{town}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputZip">Código postal</label>
                        <input type="text" name="CodigoPostal"  defaultValue={props.DataDirection?.CodigoPostal} className="form-control" minLength="5" maxLength="5" id="inputZip" required disabled={props.Disabled}/>
                    </div>
                </div>
                <input type="hidden" defaultValue={props.DataDirection?.TipoDireccion} name="TipoDireccion" />
                <input type="hidden" defaultValue={props.DataDirection?.IdDirection} name="IdDirection" />
                <button  type="submit" className={props.Disabled ?"hidden":"btn btn-primary"}>Guardar cambios</button>
                <span className="pointer btn btn-primary" onClick={props.EnabledForm}>Editar datos</span>
            </form>
        </div>)
}