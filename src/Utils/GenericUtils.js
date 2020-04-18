import React from 'react';

class GenericUtils extends React.Component {

    SetFormLogin = (event) =>{
        event.target.email.value = "";
        event.target.password.value = "";
      }

}
export default new GenericUtils();