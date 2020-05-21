import $ from 'jquery';

export function GetTownsBarcelona() {
    return $.get("https://api.idescat.cat/pob/v1/cerca.json?p=tipus/com");
};

export function GetNameTowns(response){  
    var nameTowns =[];
    var towns = response.feed.entry;
     towns.forEach(town => {
        nameTowns.push(town.title);
    });
    return nameTowns;
};
