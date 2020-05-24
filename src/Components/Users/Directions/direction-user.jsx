import React from 'react';
import FormDirection from './formDirection';

export default (props) => {
    return (
        <div className="customContainerUser">
            <div className="customForm">
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Dirección de facturacion
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <FormDirection values={props} tipoDireccion={1} />
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
                            {props.Components?.map((form, index) => <span defaultValue={index} key={index}>{form}</span>)}
                            <button type="button" onClick={() => props.setShowForm(props)}>Añadir dirección</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}