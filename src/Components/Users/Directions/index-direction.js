import React from 'react';
import TemplateDirection from './direction-user';
import FormDirection from './formDirection';
import UserDirection from './../../../Utils/Direction/UserDirection';

import {GetTownsBarcelona,GetNameTowns} from './../../../Utils/Direction/ServiceDirections';
import UserRegister from '../../../Utils/User/UserRegister';

class Direction extends React.Component{
    constructor() {
        super();
        this.state = {towns :null,directions:[],ComponentsForm:[]}
        this.ComponentsForm=[];
        this.Directions=[];
    }

    componentDidMount(){
        GetTownsBarcelona()
        .done(response => {this.setState({towns:GetNameTowns(response)});});

    }

    setShowForm =(props) =>{
        this.ComponentsForm.push(<FormDirection values={props} tipoDireccion={0}/>);
        this.setState({ComponentsForm:this.ComponentsForm});
    }

    removeItemDirection = (event)=>{
        var index = this.ComponentsForm?.indexOf(event.currentTarget.form);
        this.ComponentsForm.splice(index,1);
        this.setState({ComponentsForm:this.ComponentsForm});
    }

    AddDirection = (event) => {
        UserDirection.AddDirection(event).done(
            response => {
                if (response !== 'UnexpectedError') {
                    this.Directions.push(response);
                    this.setState({ directions: this.Directions });
                };
            }
        );
    }


    render(){
        let props ={
            Towns : this.state.towns,
            Directions : this.state.directions,
            setShowForm: this.setShowForm,
            Components:this.state.ComponentsForm,
            RemoveItem: this.removeItemDirection,
            AddDirection:this.AddDirection
        }
        return TemplateDirection(props);
    }
}
export default Direction;