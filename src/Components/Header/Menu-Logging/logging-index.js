import React from 'react';
import templateLogging from './template-logging';

class MenuLogging extends React.Component {
  constructor() {
    super();
    this.handleSubmitLogging = this.handleSubmitLogging.bind(this);
  }


 handleSubmitLogging = (event)=>{
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.password.value);
  };

  render() {
    return templateLogging();
  };

}
export default MenuLogging;