import React from 'react';
import ApiDirection from './ApiDirection';
import {GetTokenFromCookie,GetCompanyFromCookie} from './../GenericUtils';

class UserDirection extends React.Component {

    GetDataDirectionRegister = (event,email) => {
        event.preventDefault();
        var data = JSON.stringify({
            'direccion': event.target.Direccion.value,
            'numerocalle': parseInt(event.target.Numero.value),
            'piso': parseInt(event.target.Piso.value),
            'letra': event.target.Letra.value,
            'local': event.target.Local.value,
            'provincia':event.target.Provincia.value,
            'poblacion':event.target.Poblacion.value,
            'codigopostal':event.target.CodigoPostal.value,
            'tipodireccion':parseInt(event.target.TipoDireccion.value),
            'useremail':email
        });
        return data;
    };

    UpdateDirection = (event) => {
        var token = GetTokenFromCookie();
        if(token!== null){
            var dataToUpdate = this.GetDataDirectionRegister(event);
            return ApiDirection.UpdateDirection(dataToUpdate,token);
        }
        alert("Your Session has expired");
    };

    AddDirection = (event) => {
        var token = GetTokenFromCookie();
        var company =  GetCompanyFromCookie();
        var directionData = this.GetDataDirectionRegister(event ,company.Email);
        return ApiDirection.AddDirection(directionData,token);
    };

    GetDirectionsUser = () =>{
        var company =  GetCompanyFromCookie();
        var token = GetTokenFromCookie();
        return ApiDirection.GetDirection(company.Email, token);
    };
}
export default new UserDirection();