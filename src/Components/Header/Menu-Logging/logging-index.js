import {Component} from 'react';
import templateLogging from './template-logging';
import axios from 'axios';
import $ from 'jquery';

class MenuLogging extends Component {
  constructor() {
    super();
    this.handleSubmitLogging = this.handleSubmitLogging.bind(this);
  }
  
  handleSubmitLogging = (event)=>{
    event.preventDefault()
    var form = {
      'email':event.target.username.value,
      'password':event.target.password.value
    }
    var dataToSend = JSON.stringify(form);
    this.CheckLogin(dataToSend);
  };

  CheckLogin = function(form){
     $.ajax({
       url: 'http://service.local.com/Api/Users/CheckLogin',
       data: form,
       type:'POST',
       contentType: 'application/json',
       crossDomain:true,
       error:function(){alert('Ha ocurrido un error, intentalo de nuevo')}
     })
     .then(response => this.SetSessionStorageUser(response))
  };
  
  SetSessionStorageUser = function (response) {
    if (response.includes("Nombre")) 
    {
      var obj = JSON.parse(response);
      sessionStorage.setItem("Usuario", response);
      this.HandleEventSessionUser();
    }
    else {
      alert(response);
    }
  };

  HandleEventSessionUser = function(){
    var event = new CustomEvent("UserLogged",{detail:{isLogged:true}});
    document.dispatchEvent(event);
  }

  render() {
    let props = {
       onSubmit:this.handleSubmitLogging
    }
    return templateLogging(props);
  };
}

export default MenuLogging;
