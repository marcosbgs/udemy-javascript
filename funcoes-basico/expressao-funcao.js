// //DECLARAÇÃO DE FUNÇÃO

// function minhaFuncao(param) {
//     //bloco de código
// }

// minhaFuncao('param')



//EXPRESSÃO DE FUNÇÃO
//a função não tem um nome
//como usamos com CONST, a função se comporta como uma variável
//diferença entre DECLARAÇÃO DE FUNÇÃO e EXPRESSÃO DE FUNÇÃO
//funções e VAR são listadas no topo antes de qualquer coisa = HOISTING


//console.log(soma(1, 2));

console.log(apresentar());

function apresentar() {
    return 'oi';
}

console.log(soma(1, 3))
const soma = function(num1, num2) {return num1 + num2};