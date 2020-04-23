import React from 'react';
import templateLogging from './header-template';
import LoginApi from '../../Utils/ApiLogin';
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
    if(response?.Status !== undefined){
      alert(response.Status);
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
      LoginApi.CheckSession(user.Token).then(response => {
        if (response) {
          this.Logging(user);
        }else{
          alert("Your Session has expired");
          this.SetUserCookie(null);
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