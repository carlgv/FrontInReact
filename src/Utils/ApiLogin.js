import React from 'react';
import $ from 'jquery';


class ApiLogin extends React.Component {
    
    constructor() {
        super();
        this.uriCheckLogin = "http://service.checkuser.com/Api/Users/";
    }
    
    CheckUser = (data)=>{        
        return $.ajax({
            url: this.uriCheckLogin+"CheckLogin",
            data: data,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            error:function(){alert('Ha ocurrido un error, intentelo de nuevo')}
          });
    };

    CheckSession = (token)=>{
        var t = JSON.stringify({"token":token})
        return $.ajax({
            url: this.uriCheckLogin+"CheckSession",
            data: t,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            error:function(){alert('Ha ocurrido un error, intentelo de nuevo')}
          });
    }
}

export default new ApiLogin();