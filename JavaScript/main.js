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

const arr =[1, 3, 4, 5, 7, 8, 11]

const newArr = arr.map((item) => item * 2)

console.log(newArr)

const sum = arr.reduce((tatal, next) => total+next)

console.log(sum)

const filtro = arr.filter((item) => item % 2 === 0)

console.log(filtro)

const find = arr.find((item) => item === 4)