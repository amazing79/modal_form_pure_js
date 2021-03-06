const action = { update: "update", save:"save"};


function cargarObj(actual_action){
    
    let person = {key: 0, apellido:"", nombre:"", dni:"", mail:""};
   
    person.nombre = document.getElementById("txtnombre").value.trim();
    person.apellido = document.getElementById("txtapellido").value.trim();
    person.dni =  document.getElementById("txtdni").value.trim();
    person.mail = document.getElementById("txtmail").value.trim();

    if (actual_action === action.save){
        let container = document.getElementById("lvw-data");

        let idx = Number(container.dataset.keyitem) + 1;
        person.key = `key-${idx}`;
        //guardo el ultimo id, para seguir generando desde aqui. 
        container.setAttribute("data-keyitem", String(idx));
    }
    else{
        person.key = document.getElementById("hdnkey").value.trim();
    }

    return person;
}

function restoreData(key){
    let row = document.getElementById(key);
    let person = {key: 0, apellido:"", nombre:"", dni:"", mail:""};

    for(i=0; i< row.children.length; i++){
        child = row.children[i];
        if (child.dataset.column !== undefined){
            if( child.dataset.column === "key"){
                person[child.dataset.column] = key;
            }
            
            person[child.dataset.column ] = child.innerHTML ;
        }
    }

    return person;
}

function evt_load_data(data){
    
    let user = restoreData(data);
    let btn_action = document.getElementById("data-proccess");

    btn_action.setAttribute("data-action", action.update);
    document.getElementById("hdnkey").value = user.key;
    document.getElementById("txtnombre").value = user.nombre ;
    document.getElementById("txtapellido").value= user.apellido;
    document.getElementById("txtdni").value = user.dni;
    document.getElementById("txtmail").value = user.mail 

}

function evt_delete(data){
      
    let row = document.getElementById(data);
    row.remove();
}

function loadDataRow(data){

    let result = document.createElement("tr");

    let row_key = data.key;

    result.setAttribute("id", row_key);
    //recorro todas las propiedades y recupero los valores de la misma
    for (prop in data){
        //por cada propiedad, debo crear una celda
        let td_data = document.createTextNode(`${data[prop]}`);

        let td_cell = document.createElement("td");
        if (prop == "key"){
            td_cell.className ="data-key";
        }
        td_cell.setAttribute("data-column", prop);
        td_cell.appendChild(td_data);
        //agrego a la fila actual, la celda
        result.appendChild(td_cell);
    }
    //boton para modificar fila actual
    let btn = createActionBtn("Modificar" , "edit", row_key)
    let td_cell = document.createElement("td");
    td_cell.appendChild(btn);
    result.appendChild(td_cell);

    //boton para elimiar fila actual
    btn = createActionBtn("Eliminar" , "delete", row_key)
    td_cell = document.createElement("td");
    td_cell.appendChild(btn);
    result.appendChild(td_cell);

    return result;

}

function validarInputs(){
    let result = true;

    let inputs = document.querySelectorAll("input");

    for(i=0; i< inputs.length; i++){
        if(inputs[i].value.trim() === ""){
            result = false;
            inputs[i].className = "data-error";
        }
        else{
            inputs[i].className = "";
        }
    }

    return result;
}

function createActionBtn(text, type="edit", data = ""){
    let result = document.createElement("a");
    let btn_data = document.createTextNode(text);

    result.appendChild(btn_data);
    //agrego el button para modificar 
    if (type === "edit"){
        result.setAttribute("href", "#show-frm");
        result.addEventListener("click", evt => evt_load_data(data));
        result.className = "btn secondary";
    }
    else{
        result.addEventListener("click", evt => evt_delete(data));
        result.className = "btn";
    }

    return result; 
}

function clearInputs(){
    let inputs = document.querySelectorAll("input");
    let btn = document.getElementById("data-proccess");

    for(i=0; i< inputs.length; i++){
        if(inputs[i].type === "hidden"){inputs[i].value = "0";}
        else{
            inputs[i].value = "";
            inputs[i].className = "";
        }
        
    }
     //vuelvo a la accion por default del formulario
     btn.setAttribute("data-action", action.save);
}

function evt_proccess_info(){
    if(validarInputs()){

        //atrapo quien recibe el evento 
        let btn = event.target;
        let user_data = cargarObj(btn.dataset.action);

        if (btn.dataset.action === action.save ){
            addRow(user_data);
        }
        else{
            updateRow(user_data);
        }
        //reinicio el formulario con sus inputs para proximo uso
        clearInputs();
        //quito el target a la ventana modal, por lo cual se cierra (mas que nada, porque se pierde su estilo asignado por css)
        window.location.href="#";
    }
}

function addRow(data){
    var tbody = document.getElementById("lvw-data");
    let row = loadDataRow(data);
    tbody.appendChild(row);
}

function updateRow(data){

    let row = document.getElementById(data.key);
    for(i=0; i< row.children.length; i++){
        child = row.children[i];
        if (child.dataset.column !== undefined && child.dataset.column !== "key"){
             child.innerHTML = data[child.dataset.column ] ;
        }
    }

}

