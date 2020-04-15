import React, { useState, useCallback } from 'react';
import templateLogging from './Menu-Logging/template-logging';
import UserApi from '../../Utils/ApiUsers';
import UserLogin from '../../Utils/UserLogin';
import Cookies from "js-cookie";

class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmitLogging = this.handleSubmitLogging.bind(this);
    this.LogOut = this.LogOut.bind(this);
    this.state = {isLogged: false};
    this.company = {};
  }

  handleSubmitLogging = (event) => {
    UserLogin.CheckUserLogin(event).then(response => {
      this.Logging(JSON.parse(response));
    });
  };

  Logging = (response) => {
    if(response?.Error !== undefined){
      alert(response.Error);
      return;
    }
    this.SetUserCookie(JSON.stringify(response));
    this.company = response;
    this.setState({ isLogged: true });
  };

  LogOut = function(){
    this.setState({ isLogged: false, Company:{}});
    this.SetUserCookie(null);
  };

  SetUserCookie = (response) => {
    if (response !== null || response !== undefined) {
      Cookies.set('Company', response,{expires:7});
    }else{
      Cookies.set('Company',response);
    }
  }

  componentDidMount() {
    var user = UserLogin.GetUserFromCookie();
    if(user !== null){
      UserApi.CheckSession(user.Token).then(response => {
        if (response) {
          this.Logging(user);
        }else{
          alert("Your Session has expired");
        }
      });
    }
    
  };

  render() {
    let props = {
      onSubmit: this.handleSubmitLogging,
      isLogged: this.state.isLogged,
      Company: this.company,
      onLogOut: this.LogOut
    };
    return templateLogging(props);
  };

}
export default Header;