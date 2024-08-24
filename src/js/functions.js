import { $rubro, $selectRub, $tbody } from "./DOMelements.js";

//Eliminar productos
export function deleteProduct(index) {
    let newProducts = JSON.parse(localStorage.getItem('Product')) || [];
    newProducts.splice(index, 1);
    localStorage.setItem('Product', JSON.stringify(newProducts));
    makeTableAndSelectHTML(JSON.parse(localStorage.getItem('Product')));
    addSelects()
}
//Editar productos
export function editProducts(index) {
    
}

export function makeTableAndSelectHTML(productsArray) {
    $selectRub.innerHTML = ''
    $tbody.innerHTML = '';
    productsArray.forEach( (product, index) => {
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
    JSON.parse(localStorage.getItem('Rubros')).forEach(rubr => {
        $rubro.innerHTML += `<option value="${rubr}">${rubr}</option>`;
        $selectRub.innerHTML += `<option value="${rubr}">${rubr}</option>`;
    });
}
