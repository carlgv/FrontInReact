import React from 'react';
import $ from 'jquery';

class ApiUser extends React.Component {

    constructor() {
        super();
        this.uriApiUser = "http://service.user.com/Api/Users/";
    }

    GetAllUsers = () => {
        return $.ajax({
            url: this.uriApiUser + "AllUsers",
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            error: function () { alert('No eres un usuario autorizado') },
        });
    }

    GetUserById = (id) => {
        return $.ajax({
            url: this.uriApiUser + "GetUserById/" + id,
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            error: function () { alert('No eres un usuario autorizado') },
        });
    }

    GetUserByEmail = (email,token) => {
        return $.ajax({
            url: this.uriApiUser + "GetUserItemByEmail/" + email,
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            headers: {"Authorization": token},
            error: function (response) { alert(response) },
        });
    }

    UpdateUser = (userToUpdate,token) => {
        return $.ajax({
            url: this.uriApiUser + "UpdateUser",
            data: userToUpdate,
            type: 'POST',
            contentType: 'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain: true,
            error: function () { alert('Ha ocurrido un error, intentelo de nuevo') }
        });
    }

    DeleteUser = () => { }

    CreateUser = (userToAdd) => {
        return $.ajax({
            url: this.uriApiUser + "AddUser",
            data: userToAdd,
            type: 'POST',
            contentType: 'application/json',
            crossDomain: true,
            error: function () { alert('Ha ocurrido un error, intentelo de nuevo') }
        });
    }
}
export default new ApiUser();