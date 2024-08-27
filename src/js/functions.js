import { $rubro, $selectRub, $tbody, $editedName, $editedPrice, $editedStock, $dialog, $closeEditorProduct } from "./DOMelements.js";

//Eliminar productos
export function deleteProduct(index) {
    let newProducts = JSON.parse(localStorage.getItem('Product')) || [];
    newProducts.splice(index, 1);
    localStorage.setItem('Product', JSON.stringify(newProducts));
    makeTableAndSelectHTML(JSON.parse(localStorage.getItem('Product')));
    addSelects();
}

//Editar productos
export function editProducts(index) {
    $dialog.setAttribute('open');
    let editProducts = JSON.parse(localStorage.getItem('Product')) || [];
    if ((typeof $editedPrice !== 'number') || (typeof $editedStock !== 'number')){
        alert('Ingrese números en la parte del precio y el stock');
    }
}

export const  makeTableAndSelectHTML = (arrayOfProducts) => {
    $selectRub.innerHTML = '';
    $tbody.innerHTML = '';
    arrayOfProducts.forEach( (product, index) => {
        $tbody.innerHTML += `
        <tr>
            <td>${product.nombre}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.rubro}</td>
            <td class="celdButton">
                <button onclick="deleteProduct(${index})" type="button" title="Eliminar producto">
                    <img src="../../img/trash.png" alt="Tacho de basura">
                </button>
                <button class="editButtons" type="button" title="Editar producto">
                    <img src="../../img/edit.png" alt="Imagen de editar">
                </button>
            </td>
        </tr>
        `
    });    
};

export function addSelects () {
    $rubro.innerHTML = '';
    $selectRub.innerHTML = '';
    JSON.parse(localStorage.getItem('Rubros')).forEach(rubr => {
        $rubro.innerHTML += `<option value="${rubr}">${rubr}</option>`;
        $selectRub.innerHTML += `<option value="${rubr}">${rubr}</option>`;
    });
}
