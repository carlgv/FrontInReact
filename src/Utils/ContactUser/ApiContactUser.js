import React from 'react';
import $ from 'jquery';
import {FailStatusResponse} from './../GenericUtils';


class ApiContactUser extends React.Component {
    
    constructor() {
        super();
        this.uriUserContact = "http://service.user.com/Api/Contacts/";
    }
    
    AddUserContact = (data,token)=>{        
        return $.ajax({
            url: this.uriUserContact+"AddContact",
            data: data,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            headers: {"Authorization": 'Bearer '+token},
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };

    UpdateUserContact = (data,token)=>{
        return $.ajax({
            url: this.uriUserContact+"UpdateUserContact",
            data: data,
            type: 'POST',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };

    GetUserContactByIdUser = (idUserContact,token) =>{
        return $.ajax({
            url: this.uriUserContact+"GetContactByIdUser?id="+idUserContact,
            type: 'GET',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };

    GetUserContactByEmail = (email,token) =>{
        return $.ajax({
            url: this.uriUserContact+"GetContactByEmail?email="+email,
            type: 'GET',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };

    DeleteUserContact = (data,token)=>{
        return $.ajax({
            url: this.uriUserContact+"DeleteUserContact",
            data: data,
            type: 'POST',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };
}

export default new ApiContactUser();