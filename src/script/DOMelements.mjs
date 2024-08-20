//*Objetos DOM
//Agarro los inputs del DOM
export let $nombre = document.getElementById('nombre');
export let $price = document.getElementById('price');
export let $stock = document.getElementById('stock');
export let $rub = document.getElementById('rub');
//Sections del DOM
export let $mainMenu = document.getElementById('mainMenu');
export let $loadProducts = document.getElementById('loadProducts');
export let $loadRubs = document.getElementById('loadRubs');
//Botones del DOM
export let $load = document.getElementById('load');
export let $deleteButton = document.getElementById('deleteButton');
export let $editButton = document.getElementById('editButton');
export let $loadRubro = document.getElementById('loadRubro');
export let $backMainMenu = document.querySelector('#backMainMenu');
export let $showForm = document.getElementById('showForm');
export let $showRubers = document.getElementById('showRubers');
//sorter buttons
export let $sortForName = document.getElementById('sortForName');
export let $sortForPrice = document.getElementById('sortForPrice');
export let $sortForStock = document.getElementById('sortForStock');
export let $sortForRub = document.getElementById('sortForRub');
//Tabla del DOM
export let $tbody = document.getElementById('tbody');
//Select del DOM
export let $selectRub = document.getElementById('selectRub');
export let $rubro = document.getElementById('rubro');

export const makeTableAndSelectHTML = (productsArray) => {
    $selectRub.innerHTML = ''
    $tbody.innerHTML = '';
    // $selectRub.innerHTML = '';
    productsArray.forEach( product => {
        $tbody.innerHTML += `
        <tr>
            <td>${product.nombre}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.rubro}</td>
            <td class="celdButton"><button id="deleteButton" title="Eliminar producto"><img src="../../img/trash.png"></button><button id="editButton" title="Editar producto"><img src="../../img/edit.png"></button></td>
        </tr>
        `
    });    
};

