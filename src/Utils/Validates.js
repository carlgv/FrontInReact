import React from 'react';

class ValidatesData extends React.Component() {

    isValidCif(cif) {
        par = 0;
        non = 0;
        letras = "ABCDEFGHKLMNPQS";
        let = abc.charAt(0);

        if (abc.length != 9) {
            //alert('El Cif debe tener 9 dígitos');
            return false;
        }

        if (letras.indexOf(let.toUpperCase()) == -1) {
            //alert("El comienzo del Cif no es válido");
            return false;
        }

        for (zz = 2; zz < 8; zz += 2) {
            par = par + parseInt(abc.charAt(zz));
        }

        for (zz = 1; zz < 9; zz += 2) {
            nn = 2 * parseInt(abc.charAt(zz));
            if (nn > 9) nn = 1 + (nn - 10);
            non = non + nn;
        }

        parcial = par + non;
        control = (10 - (parcial % 10));
        if (control == 10) control = 0;

        if (control != abc.charAt(8)) {
            //alert("El Cif no es válido");
            return false;
        }
        //alert("El Cif es válido");
        return true;
    }
}

export default new ValidatesData();