import React from 'react';
import templateLogging from './header-template';
import LoginApi from '../../Utils/Login/ApiLogin';
import UserLogin from '../../Utils/Login/UserLogin';
import {GetTokenFromCookie,GetCompanyFromCookie,SetCookies} from './../../Utils/GenericUtils';

class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmitLogging = this.handleSubmitLogging.bind(this);
    this.LogOut = this.LogOut.bind(this);
    this.state = { isLogged: false, redirect: false };
    this.company = {};
  }

  handleSubmitLogging = (event) => {
    UserLogin.CheckUserLogin(event).then(response => {
      this.Logging(JSON.parse(response));
    });
  };

  Logging = (response) => {
    if (response?.Status !== undefined) {
      alert(response.Status);
      return;
    }
    SetCookies(response);
    this.company = response.User;
    this.setState({ isLogged: true });
  };

  LogOut = function () {
    this.setState({ isLogged: false , redirect : true});
    SetCookies(null);
  };

  componentDidMount() {
    var token = GetTokenFromCookie();
    this.company = GetCompanyFromCookie();
    
    if (token !== "null" && token !== "undefined") {
      
      LoginApi.CheckSession(token)
      .then(response => {
        if (response) {
          this.setState({ isLogged: response });
      }})
      .fail(response => {
        this.LogOut();
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