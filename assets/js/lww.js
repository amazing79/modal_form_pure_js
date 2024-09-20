export class Lvw {
    constructor(anId, aName, aFields)
    {
        this._id = anId;
        this._name = aName;
        this._fields = aFields
        this._data = [];
    }

    makeCaption()
    {
        let _caption = document.createElement('caption');
        _caption.innerText = 'Lista de Elementos';
        return _caption;

    }

    makeHeader()
    {
        let _tr = document.createElement('tr');

        this._fields.forEach(field => {
            let _th = document.createElement('th');
            _th.setAttribute('scope', 'col');
            _th.innerText = field;
            _tr.appendChild(_th);
        });
        //agrego columna para btns
        let _th = document.createElement('th');
        _th.innerText = 'actions';
        _tr.appendChild(_th);
        //finalmente creo el encabezado
        let _thead = document.createElement('thead');
        _thead.appendChild(_tr);
        return _thead;
    }

    makeBody(data)
    {
        let _tbody = document.createElement('tbody');
        data.forEach(item => {
            _tbody.appendChild(this.addRow(item));
        })
        return _tbody;
        `
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Servicios</td>
            <td>caros</td>
            <td>
                <a href="#" target="_blank" rel="noopener noreferrer">Edit</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Delete</a>
            </td>
        </tr>
        <tr>
            <th scope="row">1</th>
            <td>Servicios</td>
            <td>caros</td>
            <td>
                <a href="#" target="_blank" rel="noopener noreferrer">Edit</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Delete</a>
            </td>
        </tr>
        <tr>
            <th scope="row">1</th>
            <td>Servicios</td>
            <td>caros</td>
            <td>
                <a id="editBtn" href="#" target="_blank" rel="noopener noreferrer">Edit</a>
                <a id="deleteBtn" href="#" target="_blank" rel="noopener noreferrer">Delete</a>
            </td>
        </tr>
    </tbody>
        `
    }

    addRow(itemData)
    {

        let _tr = document.createElement('tr');
        for(let prop in itemData) {
            let _td = document.createElement('td');
            _td.innerText = itemData[prop];
            _td.setAttribute('data-colum', prop);
            _tr.appendChild(_td);
        }
        //agrego botons para interactuar con el elemento
        let btns = this.makeItemBtns();
        _tr.appendChild(btns)
        return _tr;
    }

    makeItemBtns()
    {
        let _td = document.createElement('td');
        _td.innerHTML = `
            <div>
                <a href="#" target="_blank" class="btn" rel="noopener noreferrer">Edit</a>
                <a href="#" target="_blank" class="btn" rel="noopener noreferrer">Delete</a>
            </div>
        `;    
        return _td;
    }

    makeMainBtn()
    {
        let _div = document.createElement('div');
        _div.innerHTML = '<a id="addBtn" href="#show-frm" class="btn primary">Agregar</a>';
        return _div;
    }

    buildLvw(data)
    {
        let container = document.getElementById(this._id);
        let table = document.createElement('table');
        table.appendChild(this.makeCaption());
        table.appendChild(this.makeHeader());
        table.appendChild(this.makeBody(data));
        container.appendChild(table);
        container.appendChild(this.makeMainBtn())
    }
}