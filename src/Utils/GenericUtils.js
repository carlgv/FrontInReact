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
}
export default new GenericUtils();