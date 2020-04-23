import React from 'react';
import Cookies from "js-cookie";
import ApiUser from './ApiUSer';

class UserRegister extends React.Component {

    constructor() {
        super();
        this.GetUserFromCookie = this.GetUserFromCookie.bind(this);
    }

    GetUserFromCookie = () => {
        var company = Cookies.get('Company');
        if (company !== "null" && company !== undefined) {
            return JSON.parse(company);
        }
        return null;
    }

    GetDataUserRegister = (event) => {
        event.preventDefault();
        var data = JSON.stringify({
            'email': event.target.email.value,
            'empresa': event.target.empresa.value,
            'cif': event.target.cif.value,
            'password': event.target.password.value,
            'accepted': 1
        });
        this.SetFormRegister(event);
        return data;
    }

    CreateUser = (event) =>{
        var userData = this.GetDataUserRegister(event);
        return ApiUser.CreateUser(userData);
    }

    SetFormRegister = (event) => {
        event.target.email.value = "";
        event.target.empresa.value = "";
        event.target.cif.value = "";
        event.target.password.value = "";
        event.target.conditions.value = "";
    }
}
export default new UserRegister();