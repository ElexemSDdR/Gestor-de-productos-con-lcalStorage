import { $nombre, $price, $stock, $rub, $mainMenu, $loadProducts, $loadRubs, $load, $loadRubro, $sortForName, $sortForPrice, $sortForRub, $sortForStock, $selectRub, $rubro, $backMainMenu, $showForm, $showRubers, $tbody, $backToMainMenu } from './DOMelements.js'

import { makeTableAndSelectHTML, addSelects, deleteProduct, editProducts } from "./functions.js";

$loadProducts.style.display = "none" //*Esto para que al inicio solamente se vea el menú de inicio
$loadRubs.style.display = "none"

//*Variables
//Arrays que guardarán los productos y los rubros respectivamente.
let products = [];
let rubros = [];
let estado = false;



//Esto hará que las funciones para eliminar productos y editarlos sean globales para que no tengan problemas con el type module.
window.deleteProduct = deleteProduct;
window.editProducts = editProducts;




//*Cargar los productos en el array de productos
$load.addEventListener('click', () => {
    if (($rubro.value === '') || ($nombre.value === '') || ($price.value === '') || ($stock.value === '')) {
        alert('rellene todos los campos');
    } else{
        //Se verifica que no se repitan nombres de productos, y si los hay termina ahí la función, y sino se agrega el producto.
        JSON.parse(localStorage.getItem('Product')).forEach( el => {
            if ($nombre.value === el.nombre){
                alert('Ya existe un producto con este nombre')
                exit 
            };
        });

        products.push({
            nombre: $nombre.value,
            price: parseFloat($price.value),
            stock: parseInt($stock.value),
            rubro: $rubro.value
        });
        
        localStorage.setItem('Product', JSON.stringify(products));
        alert('Se ha agregado el producto');
        makeTableAndSelectHTML(products);
    }
});

//*Agregar los rubros a su respectivo array
$loadRubro.addEventListener('click', () => {
    if ($rub.value === '') {
        alert('rellene todos los campos')
    } else {
        rubros.push($rub.value);
        localStorage.setItem('Rubros', JSON.stringify(rubros));   
        alert('El rubro se ha agregado')     
    }
});

//* Funciones para mostrar los selects para cargar, ver la tabla y volver al menú
//Mostrar formulario para cargar productos.
$showForm.addEventListener('click', () => {
    $loadProducts.style.display = "grid";
    $loadRubs.style.display = "none";
    $mainMenu.style.display = "none";
})

//Mostrar los rubros.
$showRubers.addEventListener('click', () => {
    $loadRubs.style.display = "flex";
    $loadProducts.style.display = "none";
    $mainMenu.style.display = "none";
})

//Volver al menú principal desde el formulario para cargar los productos.
$backMainMenu.addEventListener('click', () => {
    $mainMenu.style.display = "grid";
    $loadProducts.style.display = "none";
});

//Volver al menú principal desde el formulario para cargar los rubros.
$backToMainMenu.addEventListener('click', () => {
    $mainMenu.style.display = "grid";
    $loadRubs.style.display = "none";
})

//*Crear la tabla con los productos en HTML


let elementsOfLocalStrg = JSON.parse(localStorage.getItem('Product'));
//*Orenar los productos según:
//Nombre
$sortForName.addEventListener('click', () => {

    if (estado === true){
        elementsOfLocalStrg.sort((a, b) => a.nombre.localeCompare(b.nombre));
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()
    } else {
        elementsOfLocalStrg.sort((a, b) => b.nombre.localeCompare(a.nombre));
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()        
    }

    estado = !estado
});

//Precio
$sortForPrice.addEventListener('click', () => {
    if (estado === true) {
        elementsOfLocalStrg.sort((a, b) => a.price - b.price);
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()        
    } else{
        elementsOfLocalStrg.sort((a, b) => b.price - a.price);
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()                
    }
    estado = !estado
});

//Stock
$sortForStock.addEventListener('click', () => {
    if (estado === true){
        elementsOfLocalStrg.sort((a, b) => a.stock - b.stock);
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()
    } else{
        elementsOfLocalStrg.sort((a, b) => b.stock - a.stock);
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()        
    }
    estado = !estado
});

//Rubro
$sortForRub.addEventListener('click', () => {
    if (estado === true){
        elementsOfLocalStrg.sort((a, b) => a.rubro.localeCompare(b.rubro));
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()
    } else{
        elementsOfLocalStrg.sort((a, b) => b.rubro.localeCompare(a.rubro));
        makeTableAndSelectHTML(elementsOfLocalStrg);
        addSelects()
    }
    estado = !estado
});

//*Llamar los productos guardados en el localStorage y mostrarlos 


//Esto hará que cada vez que se cargue o recargue la página se muestren los productos guardados en el localStorage.
products = JSON.parse(localStorage.getItem('Product'));
document.addEventListener('DOMContentLoaded', [makeTableAndSelectHTML(products), addSelects()])




