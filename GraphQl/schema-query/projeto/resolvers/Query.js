
const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Retornando uma string'
    },
    horaCerta() {
        return `${new Date}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Luiz Silva',
            email: 'luiz@email.com',
            idade: 33,
            salario_real: 123.56,
            vip: true


        }
    },

    produtoEmDestaque() {
        return {
            nome: 'Celular',
            preco: 100.00,
            desconto: 0.3,

        }
    },

    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        return Array(6)
            .fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)


    },

    usuarios() {
        return usuarios
    },

    usuario(_, args) {
        const selecionados = usuarios.filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },
    //  OU
    // usuario(_, { id }) {
    //     const selecionados = usuarios.filter(u => u.id == id)
    //     return selecionados ? selecionados[0] : null
    // },

    perfis() {
        return perfis
    },

    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }

}