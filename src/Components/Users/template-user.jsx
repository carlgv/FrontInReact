import React from 'react';


export default (props)=>{

    if(props.Company != null){
        return (<div className="customContainer"><p>usuario :{props.Company.Empresa}</p>Página de usuario: {props.Company.Email}</div>);
    }
    return null;
}