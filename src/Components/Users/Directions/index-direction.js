import React from 'react';
import TemplateDirection from './direction-user';
import {GetTownsBarcelona,GetNameTowns} from './../../../Utils/Direction/ServiceDirections';

class Direction extends React.Component{
    constructor() {
        super();
        this.state = {towns :null}
    }

    componentDidMount(){
        GetTownsBarcelona()
        .done(response => {this.setState({towns:GetNameTowns(response)});});
    }

    render(){
        let props ={
            Towns : this.state.towns
        }
        return TemplateDirection(props);
    }
}
export default Direction;