import React from 'react';
import FormDirectionTemplate from './formDirection';
import UserDirection from '../../Utils/Direction/UserDirection';
import {GetTowns} from '../../Utils/Direction/ServiceDirections';
import $ from 'jquery';

class FormDirection extends React.Component{
    constructor(dataDirection) {
        super();
        this.DataDirection = dataDirection.data;
        this.state = {DataDirection:null,disabled:dataDirection.disabled,towns:dataDirection?.towns};
        this.GetTowns = this.GetTowns.bind(this);
    };

    AddDirection = (event) => {
        UserDirection.AddDirection(event)
        .done(response =>{
            if(response !== 'UnexpectedError'){
                var data = JSON.parse(response);
                this.setState({DataDirection:data,disabled:true});
            }
        });
    };
    
    GetTowns = (event)=>{
        var provincia = event.target.value;
        $.when(GetTowns(provincia))
        .then(towns => {this.FillTowns(towns)});
    };

    FillTowns = (towns) => {
        var nameTowns = [];
        if(towns){
            towns.elements.map(item => nameTowns.push(item.municipi_nom));
            nameTowns.sort();
        }
        this.setState({towns:nameTowns});
    };

    SetDataForm = () =>{
        this.setState({disabled:false});
    };

    render(){
        let props ={
            Towns : this.state.towns,
            AddDirection:this.AddDirection,
            DataDirection:this.state.DataDirection ? this.state.DataDirection:this.DataDirection,
            Disabled:this.state.disabled,
            onSelectProvince: this.GetTowns,
            EnabledForm:this.SetDataForm
        }
        return FormDirectionTemplate(props);
    };
}
export default FormDirection;