/*
Function expressions
*/
function adicao(n1, n2){
    return n1 + n2
}

function subtracao(n1, n2){
    return n1 - n2
}

function multiplicacao(n1, n2){
    return n1 * n2
}

function divisao(n1, n2){
    return n2 == 0 ? null : (n1 / n2).toFixed(2)
}

// Calculo e imprissão dos valores
const resultadoAdicao = adicao(5, 25)
console.log(`Adição: ${resultadoAdicao}`) // Valor 30

const resultadoSubtracao = subtracao(5, 25)
console.log(`Subtração: ${resultadoSubtracao}`) // Valor -20

const resultadoMultiplicacao = multiplicacao(5, 25)
console.log(`Multiplicação: ${resultadoMultiplicacao}`) // Valor 125

const resultadoDivisao = divisao(5, 25)
console.log(`Divisão: ${resultadoDivisao}`) // Valor 0,2

const resultadoDivisao2 = divisao(5, 0)
console.log(`Divisão por zero: ${resultadoDivisao2}`) // Valor null
