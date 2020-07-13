const { usuarios, proximoId } = require('../data/db')

module.exports = {
    // { nome, email, idade}
    novoUsuario(_, args) {
        const emailExistente = usuarios.some(u => u.email === args.email)
        // Filtro de email. 
        if (emailExistente) {
            throw new Error('E-mail cadastrado')
        }
        const novo = {
            id: proximoId,
            ...args,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
        
    },

    excluirUsuario(_, { id }) {
        // Busca em um array e retornar o número da posição no array. 
        // Se -1 não foi econtrado, > 0, foi econtrado
        const i = usuarios.findIndex(u => u.id === id)
        if (i < 0) return null
        //  .splice server para mudar array, 
        // primeira posição é o indice do array
        // segunda é quandos array vão sofrer a alteração
        // terceiro é o que entra de novo, em branco remove o indice do arry
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null

    }
}