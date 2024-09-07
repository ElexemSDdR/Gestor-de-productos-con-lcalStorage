import { $nombre, $price, $stock, $rub, $mainMenu, $loadProducts, $loadRubs, $load, $loadRubro, $sortForName, $sortForPrice, $sortForRub, $sortForStock, $rubro, $backMainMenu, $showForm, $showRubers, $close, $dialog, $selectRub, $sortRubTable, $sortImg } from './DOMelements.js'

import { makeTableAndSelectHTML, addSelects, deleteProduct, editProducts, makeRubTable, deleteRub, filterForRubs} from "./functions.js";

//*Esto para que al inicio solamente se vea el menú de inicio
$loadProducts.style.display = "none" 
$loadRubs.style.display = "none"

//*Variables
//Arrays que guardarán los productos y los rubros respectivamente.
let products = JSON.parse(localStorage.getItem('Product')) || [];
let rubros = JSON.parse(localStorage.getItem('Rubros')) || [];
let estado = false;



//Esto hará que las funciones para eliminar productos y editarlos sean globales para que no tengan problemas con el type module.
window.deleteProduct = deleteProduct;
window.editProducts = editProducts;
window.makeRubTable = makeRubTable;
window.deleteRub = deleteRub;
window.filterForRubs = filterForRubs;

$selectRub.addEventListener('change', filterForRubs)

$close.addEventListener('click', () => {
    $dialog.close();
})


//*Cargar los productos en el array de productos
$load.addEventListener('click', () => {
    if (($rubro.value === '') || ($nombre.value === '') || ($price.value === '') || ($stock.value === '')) {
        alert('rellene todos los campos');
    } else{
        // Se verifica que no se repitan nombres de productos, y si los hay termina ahí la función, y sino se agrega el producto.  
        products.forEach( el => {
            if ($nombre.value === el.nombre){
                return alert('Ya existe un producto con este nombre')
            };
        });

        products.push({
            nombre: $nombre.value,
            price: parseFloat($price.value),
            stock: parseInt($stock.value),
            rubro: $rubro.value
        });
        

        localStorage.setItem('Product', JSON.stringify(products));
        [$nombre.value, $price.value, $stock.value] = '';
        makeTableAndSelectHTML(products);
    }
});

//*Agregar los rubros a su respectivo array
$loadRubro.addEventListener('click', () => {
    rubros.forEach(rub => {
        if (rub === $rub.value){
            alert('El rubro ya existe');
            return exit
        }
    })
    if ($rub.value === '') {
        alert('rellene todos los campos');
        return exit
    }
    else {
        rubros.push($rub.value);
        localStorage.setItem('Rubros', JSON.stringify(rubros));   
        addSelects();
        makeRubTable(rubros);
        $rub.value = '';
        return exit
    }
});

//* Funciones para mostrar los selects para cargar, ver la tabla y volver al menú
//Mostrar formulario para cargar productos.
$showForm.addEventListener('click', () => {
  setTimeout(() => {
    $loadProducts.style.display = "grid";
    $loadRubs.style.display = "none";
    $mainMenu.style.display = "none";
  }, 200);
})

//Mostrar los rubros.
$showRubers.addEventListener('click', () => {
  setTimeout(() => {
      $loadRubs.style.display = "flex";
      $loadProducts.style.display = "none";
      $mainMenu.style.display = "none";
    }, 200);
})

//Volver al menú principal desde el formulario para cargar los productos.
$backMainMenu.forEach( btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
          $mainMenu.style.display = "grid";
          $loadProducts.style.display = "none";
          $loadRubs.style.display = "none";
        }, 50);
    });
});

//*Orenar los productos según:
//Nombre
$sortForName.addEventListener('click', () => {

    if (estado === true){
        products.sort((a, b) => a.nombre.localeCompare(b.nombre));
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');
    } else {
        products.sort((a, b) => b.nombre.localeCompare(a.nombre));
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.add('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');
    }

    estado = !estado
});

//Precio
$sortForPrice.addEventListener('click', () => {
    if (estado === true) {
        products.sort((a, b) => a.price - b.price);
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');        
    } else{
        products.sort((a, b) => b.price - a.price);
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.add('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');                
    }
    estado = !estado
});

//Stock
$sortForStock.addEventListener('click', () => {
    if (estado === true){
        products.sort((a, b) => a.stock - b.stock);
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');
    } else{
        products.sort((a, b) => b.stock - a.stock);
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.add('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');        
    }
    estado = !estado
});

//Rubro
$sortForRub.addEventListener('click', () => {
    if (estado === true){
        products.sort((a, b) => a.rubro.localeCompare(b.rubro));
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');
    } else{
        products.sort((a, b) => b.rubro.localeCompare(a.rubro));
        makeTableAndSelectHTML(products);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.add('rotaded');
        $sortImg[4].classList.remove('rotaded');
    }
    estado = !estado
});

//*Ordenar la tabla de los rubros
$sortRubTable.addEventListener('click', () => {
    if (estado === true){
        rubros.sort((a, b) => a.localeCompare(b));
        makeRubTable(rubros);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.remove('rotaded');
    } else{
        rubros.sort((a, b) => b.localeCompare(a));
        makeRubTable(rubros);
        addSelects();
        $sortImg[0].classList.remove('rotaded');
        $sortImg[1].classList.remove('rotaded');
        $sortImg[2].classList.remove('rotaded');
        $sortImg[3].classList.remove('rotaded');
        $sortImg[4].classList.add('rotaded');
    }
    estado = !estado
});



//*Llamar los productos guardados en el localStorage y mostrarlos 
//Esto hará que cada vez que se cargue o recargue la página se muestren los productos guardados en el localStorage.
// products = JSON.parse(localStorage.getItem('Product'));
document.addEventListener('DOMContentLoaded', [
    makeTableAndSelectHTML(JSON.parse(localStorage.getItem('Product'))),
    addSelects(),
    makeRubTable(rubros)]
)




