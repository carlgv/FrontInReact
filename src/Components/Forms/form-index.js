import React from 'react';
import templateFormUser from './template-form-user';
import UserRegister from './../../Utils/UserRegister';
import { Redirect } from 'react-router-dom';
import Home from '../Home/home-index';

class Form extends React.Component {

  constructor() {
    super();
    this.handleSubmitAddUser = this.handleSubmitAddUser.bind(this);
    this.state = { redirect: false };
  }

  handleSubmitAddUser = (event) => {
    UserRegister.CreateUser(event).then(response => {
      alert(response);
      if(response === "SaveSuccessfully"){
        this.setState({redirect:true});
      }
    });
  };

  render() {
    let props = {
      register: this.handleSubmitAddUser,
    }
    if (this.state.redirect) {
      return <Redirect to={<Home/>}/>
    }
    return templateFormUser(props);
  };

}
export default Form;