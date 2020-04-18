import React from 'react';
import Cookies from "js-cookie";
import UserApi from './ApiLogin';
import GenericUtils from './GenericUtils';

class UserLogin extends React.Component {

  constructor() {
    super();
    this.CheckUserLogin = this.CheckUserLogin.bind(this);
    this.GetUserFromCookie = this.GetUserFromCookie.bind(this);
  }

  GetUserFromCookie = () => {
    var company = Cookies.get('Company');
    if (company !== "null" && company !== undefined) {
      return JSON.parse(company);
    }
    return null;
  }

  CheckUserLogin = (event) => {
    var company = this.GetDataUserLogin(event);
    return UserApi.CheckUser(company);
  }

  GetDataUserLogin = (event) => {
    event.preventDefault();
    var data = JSON.stringify({
      'email': event.target.email.value,
      'password': event.target.password.value
    });
    GenericUtils.SetFormLogin(event);
    return data;
  }


  CheckSession = () => {
    var user = this.GetUserFromCookie();
    if (user !== null) {
      UserApi.CheckSession(user.Token);
    }
  }

}
export default new UserLogin();