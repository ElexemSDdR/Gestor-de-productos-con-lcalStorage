Utilizando localStorage crear una app o webApp que pertmita gestionar una lista de productos y los rubros a los cuales pertenecen. 

```javascript

CRUD: {
Create -> Agreagar un dato
Read -> mostrarlo 
Update -> Modificar
Delete -> Borrar
}

//uso de localStorage

//guardado
localStorage.setItem('llave', JSON.stringify(arrayConObjetos));


//llamado
let guardarLocalStg = localStorage.getItem('llave');
//mostrarlo
console.log(JSON.parse(guardarLocalStg))

```