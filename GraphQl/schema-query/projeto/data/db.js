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
    status: 'ATIVO',
},{
    id: 2,
    nome: 'Maria Gomes',
    email: 'maria@email.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO',
},{
    id: 3,
    nome: 'Ana Braga',
    email: 'ana@mail.com',
    idade: 26,
    perfil_id: 1,
    status: 'BLOQUEADO',
}
]

module.exports = { perfis, usuarios }