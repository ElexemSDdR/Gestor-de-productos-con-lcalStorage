//*Objetos DOM
const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el); 
//Agarro los inputs del DOM
export const $nombre = $('#nombre');
export const $price = $('#price');
export const $rub = $('#rub');
export const $stock = $('#stock');
//Sections del DOM
export const $loadProducts = $('#loadProducts');
export const $loadRubs = $('#loadRubs');
export const $mainMenu = $('#mainMenu');
//Botones del DOM
export const $backMainMenu = $$('.backButton')
export const $close = $('#close');
export const $closeEditorProduct = $('#closeEditorProduct');
export const $deleteRubButtons = $$('.deleteRubButtons');
export const $editedName = $('#editedName');
export const $editedPrice = $('#editedPrice');
export const $editedStock = $('#editedStock');
export const $load = $('#load');
export const $loadRubro = $('#loadRubro');
export const $showForm = $('#showForm');
export const $showRubers = $('#showRubers');
export const $sortRubTable = $('#sortRubTable');
//sorter buttons
export const $sortForName = $('#sortForName');
export const $sortForPrice = $('#sortForPrice');
export const $sortForRub = $('#sortForRub');
export const $sortForStock = $('#sortForStock');
//Tablas del DOM
export const $rubTable = $('#rubTable');
export const $tbody = $('#tbody');
//Select del DOM
export const $rubro = $('#rubro');
export const $selectRub = $('#selectRub');
//Dialog del DOM
export const $dialog = $('#dialog');
//Img del DOM
export const $sortImg = $$('.normal');



