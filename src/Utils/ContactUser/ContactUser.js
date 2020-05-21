import React from 'react';
import ApiContactUser from './ApiContactUser';
import {GetTokenFromCookie,GetCompanyFromCookie} from './../GenericUtils';

class UserContactRegister extends React.Component {

    GetDataFromCookies = ()=>{
        return {
            'token': GetTokenFromCookie(),
            'company': GetCompanyFromCookie()
        };
    };

    GetFormDataUserContact = (event,email) => {
        event.preventDefault();
        var data = JSON.stringify({
            'idusercontact':parseInt(event.target.usercontactid.value),
            'nombre': event.target.nombre.value,
            'apellidos': event.target.apellidos.value,
            'telephone': event.target.telf.value,
            'useremail':email
        });
        return data;
    };

    UpdateContactUser = (event) => {
        var data = this.GetDataFromCookies();
        if(data.company !== null){
            var dataToUpdate = this.GetFormDataUserContact(event,data.company.Email);
            return ApiContactUser.UpdateUserContact(dataToUpdate,data.token);
        }
    };

    CreateContactUser = (event) => { 
        var data = this.GetDataFromCookies();
        var userData = this.GetFormDataUserContact(event,data.company.Email);
        return ApiContactUser.AddUserContact(userData,data.token);
    };

    GetContactUser = () => {
        var data = this.GetDataFromCookies();
        return ApiContactUser.GetUserContactByEmail(data.company.Email, data.token);
    };

}
export default new UserContactRegister();