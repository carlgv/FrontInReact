import $ from 'jquery';

export function GetTownsBarcelona() {
    return $.get("https://do.diba.cat/api/dataset/municipis/format/json");
};

export function GetNameTowns(response){  
    var nameTowns =[];
    response.elements.forEach(item => nameTowns.push(item.municipi_nom));
    nameTowns.sort();
    return nameTowns;
};
