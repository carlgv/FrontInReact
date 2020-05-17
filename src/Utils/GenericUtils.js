import React from 'react';
import Cookies from "js-cookie";

class GenericUtils extends React.Component {

    GetCompanyFromCookie = () => {
        var company = Cookies.get('Company');
        if (company !== "null" && company !== "undefined") {
            return JSON.parse(company);
        }
        return null;
    }

    GetTokenFromCookie = () => {
        return Cookies.get('Token');
    }

    SetCookies = (response) => {
        Cookies.set('Company', response?.User, { expires: 7 });
        Cookies.set('Token', response?.Token, { expires: 7 });
    }

    FailStatusResponse = (response) =>{
        if(response.status === 401){
            alert("Your Session has Expired");
            window.location.href = "http://localhost:3000";
        }else{
            alert("Error: " + response.statusText);
        }
        this.SetCookies(null); 
    }
}
export default new GenericUtils();