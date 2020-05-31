import React from 'react';
import ApiUser from './ApiUSer';
import {GetTokenFromCookie,GetCompanyFromCookie} from './../GenericUtils';


class UserRegister extends React.Component {

    GetDataUserRegister = (event) => {
        event.preventDefault();
        var data = JSON.stringify({
            'email': event.target.email.value,
            'empresa': event.target.empresa.value,
            'cif': event.target.nif.value,
            'password': event.target.password.value,
            'accepted': 0
        });
        return data;
    };

    GetDataUserUpdate = (event, empresa) => {
        event.preventDefault();
        return JSON.stringify({
            'email': event.target.email.value,
            'originalemail': empresa.Email,
            'empresa': event.target.empresa.value,
        });
    }

    UpdateUser = (event) => {
        var token = GetTokenFromCookie();
        var empresa = GetCompanyFromCookie();
        if(empresa!== null){
            var dataToUpdate = this.GetDataUserUpdate(event,empresa);
            return ApiUser.UpdateUser(dataToUpdate,token);
        }
        alert("Your Session has expired");
    }

    CreateUser = (event) => {
        var token = GetTokenFromCookie();
        var userData = this.GetDataUserRegister(event);
        return ApiUser.CreateUser(userData,token);
    }

}
export default new UserRegister();