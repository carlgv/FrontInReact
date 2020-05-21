import React from 'react';
import $ from 'jquery';
import {FailStatusResponse} from './../GenericUtils';

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
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
        });
    };

    GetUserById = (id) => {
        return $.ajax({
            url: this.uriApiUser + "GetUserById/" + id,
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            },
        });
    };

    GetUserByEmail = (email,token) => {
        return $.ajax({
            url: this.uriApiUser + "GetUserItemByEmail/" + email,
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            headers: {"Authorization": token},
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
        });
    };

    CreateUser = (userToAdd) => {
        return $.ajax({
            url: this.uriApiUser + "AddUser",
            data: userToAdd,
            type: 'POST',
            contentType: 'application/json',
            crossDomain: true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
        });
    };

    UpdateUser = (userToUpdate,token) => {
        return $.ajax({
            url: this.uriApiUser + "UpdateUser",
            data: userToUpdate,
            type: 'POST',
            contentType: 'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain: true,
            error: function (jqXHR, exception) {
               FailStatusResponse(jqXHR);
            }
        });
    };

    DeleteUser = () => { }

    
}
export default new ApiUser();