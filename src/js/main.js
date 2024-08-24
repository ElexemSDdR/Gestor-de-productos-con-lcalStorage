import { $nombre, $price, $stock, $rub, $mainMenu, $loadProducts, $loadRubs, $load, $loadRubro, $sortForName, $sortForPrice, $sortForRub, $sortForStock, $selectRub, $rubro, $backMainMenu, $showForm, $showRubers, $tbody  } from './DOMelements.js'


$loadProducts.style.display = "none" //*Esto para que al inicio solamente se vea el menú de inicio
$loadRubs.style.display = "none"

//*Variables
//Arrays que guardarán los productos y los rubros respectivamente.
let products = [
    {
        nombre: 'Manzana',
        price: 20,
        stock: 120,
        rubro: 'Frutas'
    },
    {
        nombre: 'Melon',
        price: 50,
        stock: 80,
        rubro: 'Frutas'        
    },
    {
        nombre: 'Lechuga',
        price: 10,
        stock: 220,
        rubro: 'Verdura'
    },
    {
        nombre: 'Escoba',
        price: 70,
        stock: 200,
        rubro: 'Limpieza'
    }
];
let rubros = ['Frutas', 'Veduras', 'Limpieza'];
let estado = false;

function makeTableAndSelectHTML(productsArray) {
    $selectRub.innerHTML = ''
    $tbody.innerHTML = '';
    productsArray.forEach( (product, index) => {
        $tbody.innerHTML += `
        <tr>
            <td>${product.nombre}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.rubro}</td>
            <td class="celdButton"><button title="Eliminar producto" onclick="deleteProducts(${index})"><img src="../../img/trash.png" alt="Tacho de basura"></button><button title="Editar producto"><img src="../../img/edit.png" alt="Imagen de editar"></button></td>
        </tr>
        `
    });    
};

function addSelects () {
    JSON.parse(localStorage.getItem('Rubros')).forEach(rubr => {
        $rubro.innerHTML += `<option value="${rubr}">${rubr}</option>`;
    });
    JSON.parse(localStorage.getItem('Rubros')).forEach(addRub => $selectRub.innerHTML += `<option value="${addRub}">${addRub}</option>`);
}


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


//Eliminar productos
function deleteProducts(index) {
    let eliminatedProducts = JSON.parse(localStorage.getItem('Product'));
    eliminatedProducts.splice(index, 1);
    localStorage.setItem('Product', JSON.stringify(eliminatedProducts));
    return makeTableAndSelectHTML(JSON.parse(localStorage.getItem('Product')));
}

products = JSON.parse(localStorage.getItem('Product'))
addSelects();
makeTableAndSelectHTML(products);




