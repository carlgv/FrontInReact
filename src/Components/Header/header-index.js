import React from 'react';
import templateHeader from './template-header';

class Header extends React.Component {
  constructor() {
    super();
    this.checkEvent = this.checkEvent.bind(this);
    document.addEventListener("UserLogged", this.checkEvent);
  }

  checkEvent = (data)=>{
    this.render(data.detail.isLogged);
  }

  render(isUserLogged = false) {
    let props = {
      isLogged:isUserLogged
    }
    return templateHeader(props);
  }
}
export default Header;