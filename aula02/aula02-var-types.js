/*

Variáveis:
    const -> constante (não pode ser mudado)
    let -> variavel 
    var (antigo - descontinuado)

Types:
    string
    number
    boolean
    object
    null & undefined

*/

// object

const usuario1 = {
    nome: 'Moabe',
    idade: 32,
    casado: true,
    conjuge: 'Ingrid'
}

const usuario2 = {
    nome: 'João',
    idade: 18,
    casado: false,
    conjuge: null
}

console.log(usuario1.nome)
console.log(usuario1.abacate) // undefined (não existe)