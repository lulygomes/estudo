const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
]

const usuarios =[{
    id: 1,
    nome: 'João Silva',
    email: 'joão@email.com',
    idade: 19,
    perfil_id: 1,
},{
    id: 2,
    nome: 'Maria Gomes',
    email: 'maria@email.com',
    idade: 31,
    perfil_id: 2,
},{
    id: 3,
    nome: 'Ana Braga',
    email: 'ana@mail.com',
    idade: 26,
    perfil_id: 1,
}
]

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto){
            return produto.preco *(1 - produto.desconto)
        } else {
            return produto.preco
        }
        }
    },

    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        
        perfil(usuario) {
            const sels = perfis.filter(p => p.id === usuario.perfil_id)
            return sels ? sels[0] : null
        }
    },
    Query: {
        ola(){
            return 'Retornando uma string'
        },
        horaCerta(){
            return `${new Date}`
        },
        usuarioLogado(){
            return{
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
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})