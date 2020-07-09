const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }


    # Pontos de entrada da sua Api!
    type Query {
        ola: String
        horaCerta: String
        usuarioLogado: Usuario
    }
`

const resolvers = {
    // Usuario: {
    //     salario(usuario) {
    //         return usuario.salario_real
    //     }
    // },
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})