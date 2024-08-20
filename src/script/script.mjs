import { $nombre, $price, $stock, $rub, $mainMenu, $loadProducts, $loadRubs, $load, $editButton, $deleteButton, $loadRubro, $sortForName, $sortForPrice, $sortForRub, $sortForStock, $selectRub, $rubro, $backMainMenu, $showForm, $showRubers, makeTableAndSelectHTML } from './DOMelements.mjs'

$loadProducts.style.display = "none" //*Esto para que al inicio solamente se vea el menú de inicio
$loadRubs.style.display = "none"


//*Variables
//Arrays que guardarán los productos y los rubros respectivamente.
let products = [];
let rubros = [];
let estado = false;

//*Cargar los productos en el array de productos
$load.addEventListener('click', () => {
    if (($rubro.value === '') || ($nombre.value === '') || ($price.value === '') || ($stock.value === '')) {
        alert('rellene todos los campos');
    } else{
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

$loadRubro.addEventListener('click', () => {
    if ($rub.value === '') {
        alert('rellene todos los campos')
    } else {
        rubros.push($rub.value);
        localStorage.setItem('Rubros', JSON.stringify(rubros));        
    }
});

//* Funciones para mostrar los selects para cargar, ver la tabla y volver al menú
//Mostrar formulario para cargar productos
$showForm.addEventListener('click', () => {
    $loadProducts.style.display = "grid";
    $loadRubs.style.display = "none";
    $mainMenu.style.display = "none";
})

//Volver al menú inicial
$backMainMenu.addEventListener('click', () => {
    $mainMenu.style.display = "grid";
    $loadProducts.style.display = "none";
    $loadRubs.style.display = "none";
})

$showRubers.addEventListener('click', () => {
    $loadRubs.style.display = "flex";
    $loadProducts.style.display = "none";
    $mainMenu.style.display = "none";
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

console.log(JSON.parse(localStorage.getItem('Rubros')))
makeTableAndSelectHTML(elementsOfLocalStrg);

const addSelects = () => {
    JSON.parse(localStorage.getItem('Rubros')).forEach(rubr => {
        $rubro.innerHTML += `<option value="${rubr}">${rubr}</option>`;
    });
    JSON.parse(localStorage.getItem('Rubros')).forEach(addRub => $selectRub.innerHTML += `<option value="${addRub}">${addRub}</option>`);
}

addSelects()



