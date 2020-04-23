import React from 'react';
import templateUser from './template-user';
import UserLogin from '../../Utils/UserLogin';

class User extends React.Component {

    constructor() {
        super();
        this.state = {Company: {}};
    }

    componentDidMount() {
        var user = UserLogin.GetUserFromCookie();
        if (user !== null) {
            this.setState({ Company: user });
        }
    };

    render() {
        let props = {
            Company: this.state.Company
        }
        return templateUser(props);
    }
}
export default User;