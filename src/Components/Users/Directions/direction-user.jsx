import React from 'react';

function FormDirection(values){
    if(values.props.directions !== undefined){
        return (
            <form>
            <div class="form-row">
                <div className="form-group col-md-6">
                    <label for="direccion">Dirección</label>
                    <input type="text" id="direccion" name="direccion" className="form-control" minLength="10"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="numero">Número</label>
                    <input type="text" id="numero" name="numero" defaultValue="5" className="form-control" minLength="10"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="letra">Letra</label>
                    <input type="text" id="letra" name="letra" defaultValue="A" className="form-control" minLength="10"/>
                </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputState">Provincia</label>
                        <select id="inputState" name="provincia" class="form-control" disabled>
                            <option selected>Barcelona</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="poblacion">Población</label>
                        <select name="poblacion" id="poblacion" className="form-control" required>
                            <option></option>
                            {values.props.Towns?.map(town => <option>{town}</option>)};
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputZip">Código postal</label>
                        <input type="text" class="form-control" pattern="[0-9]*" maxLength="5" minLength="5" id="inputZip" />
                    </div>
                </div>
                <input type="hidden" value={values.props.tipoDireccion} name="tipoDireccion" />
                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                <span className="pointer btn btn-primary">Editar datos</span>
            </form>   )
    }
    return (
        <div >
            <span style={{display:"block"}} >Aún no tienes una dirección añade una ahora!</span>
            <button style={{display:"block"}} type="button">Añadir dirección</button>
        </div>
    )
 
}

export default (props) => {

    return (
        <div className="customContainerUser">
        <div className="customForm">
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                           Direcciones de facturacion
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <FormDirection props={props} tipoDireccion="1"/>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Direcciones de entrega
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <FormDirection props={props} tipoDireccion="0"/>
                </div>
            </div>
        </div>
        </div>
        </div>

    );
}