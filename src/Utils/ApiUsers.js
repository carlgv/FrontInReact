import React from 'react';
import $ from 'jquery';


class ApiUsers extends React.Component {
    
    constructor() {
        super();
        this.uri = "http://service.local.com/Api/Users/";
    }
    
    CheckUser = (data)=>{        
        return $.ajax({
            url: this.uri+"CheckLogin",
            data: data,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            error:function(){alert('Ha ocurrido un error, intentelo de nuevo')}
          })
    };

    CheckSession = (token)=>{
        var t = JSON.stringify({"token":token})
        return $.ajax({
            url: this.uri+"CheckSession",
            data: t,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            error:function(){alert('Ha ocurrido un error, intentelo de nuevo')}
          })
    }

    GetAllUsers = ()=>{
        return $.ajax({
            url: this.uri+"AllUsers",
            type: 'GET',
            contentType: 'application/json',
            crossDomain:true,
            error:function(){alert('No eres un usuario autorizado')},
          })

    }

    GetUserById = (id)=>{
        return $.ajax({
            url: this.uri+"GetUserById/"+id,
            type: 'GET',
            contentType: 'application/json',
            crossDomain:true,
            error:function(){alert('No eres un usuario autorizado')},
          })
    }

    GetUserByEmail = (email)=>{
        return $.ajax({
            url: this.uri+"GetUserItemByEmail/"+email,
            type: 'GET',
            contentType: 'application/json',
            crossDomain:true,
            error:function(){alert('No eres un usuario autorizado')},
          })
    }

    UpdateUser = (userToUpdate)=>{
        return $.ajax({
            url: this.uri+"UpdateUser",
            data: userToUpdate,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            error:function(){alert('Ha ocurrido un error, intentelo de nuevo')}
          })
    }

    DeleteUser = ()=>{}

    CreateUser = ()=>{
    }

}
const apiUsers = new ApiUsers();
export default apiUsers;