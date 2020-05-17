import React from 'react';
import $ from 'jquery';
import GenericUtil from './../GenericUtils';


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
        return $.ajax({
            url: this.uriCheckLogin+"CheckSession",
            type: 'POST',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                GenericUtil.FailStatusResponse(jqXHR);
            }
          });
    }
}

export default new ApiLogin();