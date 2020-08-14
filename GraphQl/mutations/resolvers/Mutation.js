const { usuarios, proximoId } = require('../data/db')

function indiceUsuario(filtro){
    if(!filtro) return -1
    const { id, email } = filtro

    if(id){
        return usuarios.findIndex(u => u.id === id)
    } else if(email){
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    // { nome, email, idade}
    novoUsuario(_, { dados }) {
        const emailExistente = usuarios.some(u => u.email === dados.email)
        // Filtro de email. 
        if (emailExistente) {
            throw new Error('E-mail cadastrado')
        }
        const novo = {
            id: proximoId,
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
        
    },
    excluirUsuario(_, { filtro }) {
        const i =  indiceUsuario(filtro)
        if (i < 0) return null
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

/* 
    excluirUsuario(_, { id }) {
        // Busca em um array e retornar o número da posição no array. 
        // Se -1 não foi encontrado, > 0, foi encontrado
        const i = usuarios.findIndex(u => u.id === id)
        if (i < 0) return null
        //  .splice server para mudar array, 
        // primeira posição é o índice do array
        // segunda é quando array vão sofrer a alteração
        // terceiro é o que entra de novo, em branco remove o índice do arry
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null

    }, */

    alterarUsuario(_, { filtro, dados}) {
        const i = indiceUsuario(filtro)
        // const i = usuarios.findIndex(u => u.id === args.id)
        if(i < 0) return null

        usuarios[i].nome = dados.nome
        usuarios[i].email = dados.email
        if(dados.idade) {
            usuarios[i].idade = dados.idade
        }

        // o objetos usuário vai receber todos os argumentos de usuário no indice [i]
        // e o que conflitar com o usuário args vai ser substituido 
        // const usuario ={
        //     ...usuarios[i],
        //     ...args
        // }

        // usuarios.splice(i, 1, usuario)
        return usuarios[i]
    }
}