import React from 'react';
import templateUser from './template-user';
import ValidateForms from '../../Utils/ValidateForms';
import UserRegister from '../../Utils/User/UserRegister';
import Cookies from "js-cookie";
import GenericUtil from './../../Utils/GenericUtils';

class User extends React.Component {

    constructor() {
        super();
        this.state = { Company: {}, isDisabled:true, isEmailValid:null, isCifValid:null};
        this.validateCif = this.validateCif.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.setDisabledInput = this.setDisabledInput.bind(this);
    }

    validateCif = (event) => {
        var cif = event.target.value;
        if (cif !== "") {
            this.setState({ isCifValid: ValidateForms.validateCIF(cif) });
        }
    }

    validateEmail = (event) => {
        var email = event.target.value;
        if (email !== "" && email.length > 6) {
            this.setState({ isEmailValid: ValidateForms.validateEmail(email) });
        }
    }

    updateUser = (event)=>{
        if(this.state.isEmailValid || this.state.isEmailValid === null){
            UserRegister.UpdateUser(event).then(response => {
                if(response !== "UnexpectedError" && response !== "NoChange"){
                    Cookies.set('Company', response ,{expires:7});
                    alert("Se han guardado los cambios")
                }else{
                    alert(response);
                }
            });
            this.setState({ isDisabled: true });
        }else{
            event.preventDefault();
            alert("No se han actualizado los datos, revise el formulario");
        }
    }

    setDisabledInput = () => {
        this.setState({ isDisabled: false });
    }

    componentDidMount() {
        var empresa = GenericUtil.GetCompanyFromCookie();
        if (empresa !== "null" && empresa !== undefined ) {
            this.setState({ Company: empresa });
        }
        else {
            this.setState({ Company: {} });
        }
    };

    render() {
        let props = {
            Company: this.state.Company,
            verifyEmail: this.validateEmail,
            verifyCIF: this.validateCif,
            isDisabled: this.state.isDisabled,
            setDisabledInput: this.setDisabledInput,
            isEmailValid: this.state.isEmailValid,
            isCifValid: this.state.isCifValid,
            update : this.updateUser
        }
        return templateUser(props);
    }
}
export default User;