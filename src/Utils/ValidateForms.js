import React from 'react';


class ValidateForms extends React.Component {

    validateCIF = (cif) => {
        var pares = 0;
        var impares = 0;
        var suma;
        var unumero;
        var xxx;
        var lastChar = cif.charAt(8);
        for (var cont = 1; cont < 7; cont++) {
            xxx = (2 * parseInt(cif.substr(cont++, 1))).toString() + '0';
            impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
            pares += parseInt(cif.substr(cont, 1));
        }

        xxx = (2 * parseInt(cif.substr(cont, 1))).toString() + '0';
        impares += parseInt(xxx.substr(0, 1)) + parseInt(xxx.substr(1, 1));
        suma = (pares + impares).toString();
        unumero = parseInt(suma.substr(suma.length - 1, 1));
        unumero = (10 - unumero).toString();

        if (unumero === "10") unumero = 0;

        var checkIsLetter = parseInt(lastChar);

        if (isNaN(checkIsLetter)) {
            var positionNumber = lastChar.charCodeAt(0) - 64;
            if (positionNumber.toString() === unumero) {
                return true;
            }
        } else {
            if (lastChar === unumero) {
                return true;
            };
        }
        return false;
    }

    validateEmail = (email) => {
        var regex = new RegExp(/\S+@\S+\.\S+/);
        if (regex.test(email)) {
            return true;
        }
        return false;
    }
}

export default new ValidateForms();


