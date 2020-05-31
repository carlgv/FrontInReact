import React from 'react';
import TemplateDirection from './direction-user';
import FormDirection from '../../Forms/formDirection-index';
import UserDirection from '../../../Utils/Direction/UserDirection';
import {GetTowns} from '../../../Utils/Direction/ServiceDirections';
import $ from 'jquery';

class Direction extends React.Component {
    constructor() {
        super();
        this.state = { ComponentsFormDeliveryDirection:null,towns:[],ComponentFormInvoiceDirection:null}
        this.ComponentsFormDeliveryDirection = [];
    }

    ShowDeliveryDirections = () => {
        var dataDirection = {
            TipoDireccion:0
        }
        this.ComponentsFormDeliveryDirection.push(<FormDirection data={dataDirection} disabled={false}/>);
        this.setState({ ComponentsFormDeliveryDirection: this.ComponentsFormDeliveryDirection });
    };

    ShowInvoiceDirection = () => {
        var dataDirection = {
            TipoDireccion:1
        }
        this.setState({ComponentFormInvoiceDirection:<FormDirection data={dataDirection} disabled={false}/>});
        return 
    };

    GetDirectionsUser = () => {
        UserDirection.GetDirectionsUser().then(response => {
            if (response !== 'UnexpectedError' && response.length > 3) {
                var ObjectsToJSON = JSON.parse(response);
                ObjectsToJSON.forEach(direction => {
                    var provincia = "";

                    if(provincia !== direction.Provincia){
                        provincia = direction.Provincia;
                    };

                    $.when(GetTowns(provincia)).then(towns => {
                        this.FillTowns(towns);
                        this.FillDirectionsUser(direction);
                    });

                });
            }
        });
    };

    FillTowns = (towns) => {
        var nameTowns = [];
        towns.elements.map(item => nameTowns.push(item.municipi_nom));
        nameTowns.sort();
        this.setState({ towns: nameTowns });
    };

    FillDirectionsUser = (direction)=> {
        if (direction.TipoDireccion === 0) {
            this.ComponentsFormDeliveryDirection.push(<FormDirection data={direction} towns={this.state.towns} disabled={true} />);
        } else {
            this.ComponentFormInvoiceDirection = <FormDirection data={direction} towns={this.state.towns} disabled={true} />
        }
        this.setState({ ComponentsFormDeliveryDirection: this.ComponentsFormDeliveryDirection, ComponentFormInvoiceDirection: this.ComponentFormInvoiceDirection });
    };

    componentDidMount() {
        this.GetDirectionsUser();
    };

    render() {
        let props = {
            HandleShowFormDirection: this.ShowDeliveryDirections,
            ComponentsFormDeliveryDirection: this.state.ComponentsFormDeliveryDirection,
            HandleShowFormInvoiceDirection:this.ShowInvoiceDirection,
            ComponentFormInvoideDirection: this.state.ComponentFormInvoiceDirection
        };
        return TemplateDirection(props);
    };
}
export default Direction;