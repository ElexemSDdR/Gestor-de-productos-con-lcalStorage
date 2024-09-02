import { $rubro, $selectRub, $tbody, $editedName, $editedPrice, $editedStock, $dialog, $closeEditorProduct, $rubTable } from "./DOMelements.js";

//Eliminar productos
export function deleteProduct(index) {
    let newProducts = JSON.parse(localStorage.getItem('Product')) || [];
    newProducts.splice(index, 1);
    localStorage.setItem('Product', JSON.stringify(newProducts));
    makeTableAndSelectHTML(JSON.parse(localStorage.getItem('Product')));
    addSelects();
};

//Editar productos
export function editProducts(index) {
    $dialog.showModal();
    let editProducts = JSON.parse(localStorage.getItem('Product')) || [];
    $closeEditorProduct.addEventListener('click', () => {
        if((!$editedName.value) || (!$editedPrice.value) || (!$editedStock.value)){
            editProducts[index].nombre = $editedName.value || editProducts[index].nombre;
            editProducts[index].price = $editedPrice.value || editProducts[index].price;
            editProducts[index].stock = $editedStock.value || editProducts[index].stock;
            makeTableAndSelectHTML(editProducts);
            return $dialog.close();
        }
        
        else{
            editProducts[index].nombre = $editedName.value;
            editProducts[index].price = $editedPrice.value;
            editProducts[index].stock = $editedStock.value;
            makeTableAndSelectHTML(editProducts);
            return $dialog.close();
        }
    })
};

export const  makeTableAndSelectHTML = (arrayOfProducts) => {
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
                <button onclick="editProducts(${index})" class="editButtons" type="button" title="Editar producto">
                    <img src="../../img/edit.png" alt="Imagen de editar">
                </button>
            </td>
        </tr>
        `
    });  
};

export function addSelects () {
    $rubro.innerHTML = `<option value>Rubros</option>`;
    $selectRub.innerHTML = `<option value>Rubros</option>`;
    JSON.parse(localStorage.getItem('Rubros')).forEach(rubr => {
        $rubro.innerHTML += `<option value="${rubr}">${rubr}</option>`;
        $selectRub.innerHTML += `<option value="${rubr}">${rubr}</option>`;
    });
};

export const makeRubTable = (rubArray) => {
    $rubTable.innerHTML = '';
    rubArray.forEach( (rub, index) => {
        $rubTable.innerHTML += `
        <tr>
            <td style="border: 1px solid #161616">${rub}</td>
            <td class="celdRubButton" style="border: 1px solid #161616">
                <button onclick="deleteRub(${index})" class="deleteRubButtons">
                    <img src="../../img/trash.png">
                </button>
            </td>
        </tr>
        `
    })
};

export const deleteRub = (index) => {
    let newRubs = JSON.parse(localStorage.getItem('Rubros')) || [];
    if (JSON.parse(localStorage.getItem('Product')).rubro === newRubs[index]) {
        return alert('El rubro está en uso, no puede eliminarse');
    }
    else {
        newRubs.splice(index, 1);
        localStorage.setItem('Rubros', JSON.stringify(newRubs));
        addSelects();
        makeRubTable(newRubs);
        return alert('El rubro se ha eliminado')
    }
};

export const filterForRubs = () => {
    $tbody.innerHTML = '';
    let filterProducts = JSON.parse(localStorage.getItem('Product')).filter(product =>  {
        if ($selectRub.value === ''){
            return product.rubro !== $selectRub.value;
        } else {
            return product.rubro === $selectRub.value;
        };
    });
    makeTableAndSelectHTML(filterProducts);
};