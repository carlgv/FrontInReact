import Cookies from "js-cookie";

export function GetCompanyFromCookie(){
    var company = Cookies.get('Company');
    if (company !== "null" && company !== undefined && company !== "undefined") {
        return JSON.parse(company);
    }
    return null;
}

export function GetTokenFromCookie(){
    return Cookies.get('Token');
}

export function SetCookies (response)  {
    Cookies.set('Company', response?.User, { expires: 7 });
    Cookies.set('Token', response?.Token, { expires: 7 });
}

export function FailStatusResponse (response){
    if(response.status === 401){
        alert("Your Session has Expired");
        window.location.href = "http://localhost:3000";
        this.SetCookies(null);
    }else{
        alert("Error: " + response.statusText);
    }
}
