import React from 'react';
import LoginApi from './ApiLogin';
import {GetTokenFromCookie} from './../GenericUtils';

class UserLogin extends React.Component {

  constructor() {
    super();
    this.CheckUserLogin = this.CheckUserLogin.bind(this);
  }

  CheckUserLogin = (event) => {
    var company = this.GetDataUserLogin(event);
    return LoginApi.CheckUser(company);
  }

  GetDataUserLogin = (event) => {
    event.preventDefault();
    var data = JSON.stringify({
      'email': event.target.email.value,
      'password': event.target.password.value
    });
    this.SetFormLogin(event);
    return data;
  }

  SetFormLogin = (event) =>{
    event.target.email.value = "";
    event.target.password.value = "";
  }

  CheckSession = () => {
    var token = GetTokenFromCookie();
    if (token !== null) {
      LoginApi.CheckSession(token);
    }
  }

}
export default new UserLogin();