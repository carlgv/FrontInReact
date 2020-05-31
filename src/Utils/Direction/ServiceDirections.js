import $ from 'jquery';

export function GetTowns(town){
    switch (town) {
        case "Barcelona":
            return GetTownsBarcelona();
        default:
            break;
    }
}

function GetTownsBarcelona() {
    return $.ajax({
        url: "https://do.diba.cat/api/dataset/municipis/format/json",
        type: 'GET'
    });
};

