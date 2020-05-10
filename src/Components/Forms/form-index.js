import React from 'react';
import templateFormUser from './template-form-user';
import UserRegister from '../../Utils/User/UserRegister';
import { Redirect } from 'react-router-dom';
import Home from '../Home/home-index';
import ValidateForms from '../../Utils/ValidateForms';

class Form extends React.Component {

  constructor() {
    super();
    this.handleSubmitAddUser = this.handleSubmitAddUser.bind(this);
    this.validateCif = this.validateCif.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.state = { redirect: false,isEmailValid:null,isCifValid:null};
  }

  handleSubmitAddUser = (event) => {
    event.preventDefault();
    if(this.state.isEmailValid && this.state.isCifValid){
      UserRegister.CreateUser(event).then(response => {
        alert(response);
        if(response === "SaveSuccessfully"){
          this.setState({redirect:true});
        }
      });
    }else{
      alert("Revise el formulario, algunos datos son erroneos.");
    }
  };

  validateCif = (event)=>{
    var cif = event.target.value;
    if(cif !== ""){
      this.setState({isCifValid:ValidateForms.validateCIF(cif)}); 
    }
  }

  validateEmail = (event)=>{
    var email = event.target.value;
    if(email !== "" && email.length > 6){
      this.setState({isEmailValid:ValidateForms.validateEmail(email)});
    }
  }
  
  render() {
    let props = {
      register: this.handleSubmitAddUser,
      verifyCIF: this.validateCif,
      verifyEmail: this.validateEmail,
      isEmailValid: this.state.isEmailValid,
      isCifValid: this.state.isCifValid,
    };

    if (this.state.redirect) {
      return <Redirect to={<Home/>}/>
    }

    return templateFormUser(props);
  };

}
export default Form;