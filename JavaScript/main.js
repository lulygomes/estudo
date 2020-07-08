class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList {
    constructor() {
        super()

        this.usuario = "Luiz"
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onClick = function() {
    MinhaLista.add('Novo todo');
}
MinhaLista.mostraUsuario()
// document.getElementsByClassName('novotodo').onClick = function() {
//     MinhaLista.add('Nova todo')
// }