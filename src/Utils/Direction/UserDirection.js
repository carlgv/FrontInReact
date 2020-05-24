import React from 'react';
import ApiDirection from './ApiDirection';
import {GetTokenFromCookie,GetCompanyFromCookie} from './../GenericUtils';


class UserDirection extends React.Component {

    GetDataDirectionRegister = (event) => {
        event.preventDefault();
        var data = JSON.stringify({
            'email': event.target.email.value,
            'empresa': event.target.empresa.value,
            'cif': event.target.nif.value,
            'password': event.target.password.value,
            'accepted': 0
        });
        return data;
    }

    UpdateDirection = (event) => {
        var token = GetTokenFromCookie();
        if(token!== null){
            var dataToUpdate = this.GetDataDirectionRegister(event);
            return ApiDirection.UpdateDirection(dataToUpdate,token);
        }
        alert("Your Session has expired");
    }

    AddDirection = (event) => {
        var token = GetTokenFromCookie();
        var directionData = this.GetDataUserRegister(event);
        return ApiDirection.AddDirection(directionData,token);
    }
}
export default new UserDirection();