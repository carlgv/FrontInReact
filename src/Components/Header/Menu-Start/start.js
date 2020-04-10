import { Component } from 'react';
import templateLogged from './template-logged';

class Start extends Component {
    constructor() {
        super();
        this.GetUserFromSession = this.GetUserFromSession.bind(this);
    }

    GetUserFromSession = function () {
        sessionStorage.getItem("Usuario");
    };
    render() {
        let props = {
            Usuario: this.GetUserFromSession
        }
        return templateLogged(props);
    };
}

export default Start;