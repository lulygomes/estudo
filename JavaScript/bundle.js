"use strict";

// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     }
// }
// class TodoList extends Lista {
//     constructor() {
//         super();
//         this.usuario = "Luiz"
//     }
//     mostraUsuario() {
//         console.log(this.usuario)
//     }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onClick = function() {
//     MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario()
// // document.getElementsByClassName('novotodo').onClick = function() {
// //     MinhaLista.add('Nova todo')
// // }
var arr = [1, 3, 4, 5, 7, 8, 11];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (tatal, next) {
  return total + next;
});
console.log(sum);
var filtro = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filtro);
var find = arr.find(function (item) {
  return item === 4;
});
