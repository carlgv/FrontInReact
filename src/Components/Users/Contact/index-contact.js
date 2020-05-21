import React from 'react';
import TemplateContact from './contact-user';
import ContactUser from './../../../Utils/ContactUser/ContactUser';

class Contact extends React.Component{
    constructor() {
        super();
        this.state = {datos:null,Disabled:true};
    };

    createUserContact = (event) => {
        ContactUser.CreateContactUser(event).then(
            response => {
                if (response !== "UnexpectedError") {
                    var toJson = JSON.parse(response);
                    this.setState({ datos:toJson });
                }
            });
    };

    UpdateContact = (event)=> {
        ContactUser.UpdateContactUser(event).then(
            response => {
                if (response !== "UnexpectedError") {
                    var toJson = JSON.parse(response);
                    this.setState({ datos:toJson,Disabled:true});
                    alert("Se han guardado los cambios");
                }
            })
    };

    SetDisabled = ()=>{
       this.setState({Disabled: false}); 
    };

    componentDidMount() {
        ContactUser.GetContactUser().then(
            response => {
                if (response !== "UnexpectedError") {
                    var toJson = JSON.parse(response);
                    this.setState({ datos: toJson });
                }
            });
    };

    render(){
        let props = {
            datos : this.state.datos,
            addContact:this.createUserContact,
            setDisabled:this.SetDisabled,
            updateContact : this.UpdateContact,
            Disabled:this.state.Disabled
        }
        return TemplateContact(props);
    };
}
export default Contact;