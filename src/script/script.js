//Agarro los inputs del DOM
let $nombre = document.getElementById('nombre');
let $price = document.getElementById('price');
let $stock = document.getElementById('stock');
let $rub = document.getElementById('rub');
//Sections del DOM
let $mainMenu = document.getElementById('mainMenu');
let $loadProducts = document.getElementById('loadProducts');
let $table = document.getElementById('table');
//Botones del DOM
let $load = document.getElementById('load');
let $deleteButton = document.getElementById('deleteButton');
let $editButton = document.getElementById('editButton');
//Tabla del DOM
let $tbody = document.getElementById('tbody');
//Select del DOM
let $selectRub = document.getElementById('selectRub');

let products = [];
let rubros = [];

$load.addEventListener('click', () => {
    products.push({
        nombre: $nombre.value,
        price: parseFloat($price.value),
        stock: parseInt($stock.value),
        rubro: $rub.value
    });

    localStorage.setItem('Product', JSON.stringify(products));
    rubros.push($rub.value);
    makeTableAndSelectHTML(products, rubros);
})

const showForm = () => {
    $table.setAttribute('hidden', true);
    $loadProducts.removeAttribute('hidden');
    $mainMenu.style.display = "none";
}

const showTable = () => {
    $loadProducts.setAttribute('hidden', true);
    $table.removeAttribute('hidden');
    $mainMenu.style.display = "none";
}

const backToMenu =() => {
    $loadProducts.setAttribute('hidden', true);
    $table.setAttribute('hidden', true);
    $mainMenu.style.display = "flex";
}

const makeTableAndSelectHTML = (productsArray, rubs) => {
    $tbody.innerHTML = '';
    $selectRub.innerHTML = '';
    productsArray.forEach( product => {
        $tbody.innerHTML += `
        <tr>
            <td>${product.nombre}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.rubro}</td>
            <td class="celdButton"><button id="deleteButton"><img src="./img/trash.png"></button><button id="editButton"><img src="./img/edit.png"></button></td>
        </tr>
        `
    });
    rubs.forEach( rubr => {
        $selectRub.innerHTML += `<option value="${rubr}">${rubr}</option>`
    });
}

const orderByName = () => products.sort((a, b) => a.nombre.localeCompare(b.nombre))


let productosGuardados = JSON.parse(localStorage.getItem('Product'));
makeTableAndSelectHTML(productosGuardados);
console.log(productosGuardados);
