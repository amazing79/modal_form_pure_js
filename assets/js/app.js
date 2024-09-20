import { Lvw } from "./lww.js";

const items = [
    {
        "id" : 1,
        "descripcion": "Combustible",
        "valor": 15

    },
    {
        "id" : 2,
        "descripcion": "Servicios",
        "valor": 15

    },
    {
        "id" : 3,
        "descripcion": "Impuestos",
        "valor": 15

    },
];

function onLoad()
{    
    let _lvw = new Lvw('lvw_data_test', 'Categorias', ['id', 'descripcion', 'valor']);
    _lvw.buildLvw(items);
}

window.addEventListener('load', onLoad);