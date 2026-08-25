/*

Funções: 
    Só é executado quando é chamada

*/

// função void -> sem parâmetros
function digaMeuNome(){
    console.log(`Samuel Lins`)
}

digaMeuNome() // chamada de função

// função com parâmetros
function digaQualquerNome(nome){
    console.log(`Olá, eu me chamo ${nome}!`)
}

digaQualquerNome('Lins')

function somar(n1, n2){
    resultado = n1 + n2
    console.log(`${n1} + ${n2} = ${resultado}`)
}

somar(2, 2)
somar(50, 30)

// função com return
function multiplicar(n1, n2){
    resultado = n1 * n2
    return resultado
}

let resultado_multiplicacao = multiplicar(5, 2)
console.log(`Resultado da multiplicação: ${resultado_multiplicacao}`)

function estaEndividado(receita, gastos){
    if(receita > gastos){
        return `Está VERDE`
    } else {
        return `Está VERMELHO`
    }
}

const joao = estaEndividado(3000, 2500)
const josefa = estaEndividado(1600, 2000)

console.log(joao)
console.log(josefa)

// arrow function: forma nova...
const PrintarNome = () => {
    console.log('Rodolfo')
}

PrintarNome()