import React from 'react';
import ApiUser from './ApiUSer';
import GenericUtil from './../Utils/GenericUtils';


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
    }

    GetDataUserUpdate = (event, empresa) => {
        event.preventDefault();
        return JSON.stringify({
            'email': event.target.email.value,
            'originalemail': empresa.Email,
            'empresa': event.target.empresa.value,
        });
    }

    UpdateUser = (event) => {
        var token = GenericUtil.GetTokenFromCookie();
        var empresa = GenericUtil.GetCompanyFromCookie();
        if(empresa!== null){
            var dataToUpdate = this.GetDataUserUpdate(event,empresa);
            return ApiUser.UpdateUser(dataToUpdate,token);
        }
        alert("Your Session has expired");
    }

    CreateUser = (event) => {
        var userData = this.GetDataUserRegister(event);
        return ApiUser.CreateUser(userData);
    }

}
export default new UserRegister();