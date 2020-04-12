import React, { useState, useCallback } from 'react';
import templateLogging from './Menu-Logging/template-logging';
import UserApi from '../../Utils/ApiUsers';

class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmitLogging = this.handleSubmitLogging.bind(this);
    this.state = {isLogged: false,usuario:{}};
  }

  handleSubmitLogging = (event)=>{
    event.preventDefault();
    var user = JSON.stringify({
      'email':event.target.username.value,
      'password':event.target.password.value
    });
    UserApi.CheckUser(user).then(response => this.SetState(response));
  };

  SetState = function (response) {
    if(response.includes('Nombre')){
      var user = JSON.parse(response);
      this.setState({ isLogged: true, usuario: { user } });
      this.SetUserSessionStorage(user);
    }else{
      alert(response);
    }
  };

  SetUserSessionStorage = (response) => {
    if (response != null && response != undefined) {
      sessionStorage.removeItem("Usuario");
      sessionStorage.setItem("Usuario", JSON.stringify(response));
    }
  }

  componentDidMount() {
    this.GetUserFromSessionStore();
  }

  GetUserFromSessionStore = ()=>{
    var user = sessionStorage.getItem('Usuario');
    if(user != undefined && user != null){
      this.SetState(user);
    }
  }

  render() {
    let props = {
      onSubmit: this.handleSubmitLogging,
      isLogged: this.state.isLogged,
      Usuario: this.state.usuario.user,
    };
    return templateLogging(props);
  };

}
export default Header;