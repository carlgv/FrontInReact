import React from 'react';
import $ from 'jquery';
import {FailStatusResponse} from './../GenericUtils';


class ApiDirection extends React.Component {
    
    constructor() {
        super();
        this.uriDirection = "http://service.checkuser.com/Api/Directions/";
    }
    
    AddDirection = (data,token)=>{        
        return $.ajax({
            url: this.uriDirection+"AddDirection",
            data: data,
            type: 'POST',
            contentType:'application/json',
            crossDomain:true,
            headers: {"Authorization": token},
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    };

    UpdateDirection = (data, token)=>{
        return $.ajax({
            url: this.uriDirection+"CheckSession",
            data:data,
            type: 'POST',
            contentType:'application/json',
            headers: {"Authorization": 'Bearer '+token},
            headers: {"Authorization": token},
            crossDomain:true,
            error: function (jqXHR, exception) {
                FailStatusResponse(jqXHR);
            }
          });
    }

    DeleteDirection = (id) => {
        
    }
}

export default new ApiDirection();