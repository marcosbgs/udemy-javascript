/*
-> RETORNA UM NOVO ARRAY
-> RECEBE UMA FUNÇÃO DE CALLBACK
-> PODE RETORNAR UM ARRAY MENOR OU DE TAMANHO IGUAL, DEPENDE DO QUE FOI FILTRADO
-> NÃO ALTERA O VALOR ORIGINAL
*/

//RETORNE OS NÚMEROS MAIORES QUE 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10; //retorna true ou false
}

const numerosFiltrados = numeros.filter(callbackFilter); //filter recebe uma função de callback
//const numerosFiltrados = numeros.filter(valor => valor > 10); --> MESMA COISA DE CIMA, PORÉM RESUMIDA
//console.log(numerosFiltrados);


//RETORNE AS POSSOAS QUE TEM ONOME COM 5 LETRAS OU MAIS
//RETORNE AS PESSOAS COM MAIS DE 50 ANOS
//RETORNE AS PESSOAS CUJO NOME TERMINA COM "A" 
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
//RETORNE AS POSSOAS QUE TEM ONOME COM 5 LETRAS OU MAIS
const nomePessoas = pessoas.filter(objeto => objeto.nome.length >= 7);
console.log(nomePessoas);

//RETORNE AS PESSOAS COM MAIS DE 50 ANOS
const idadePessoas = pessoas.filter(objeto => objeto.idade > 50);
console.log(idadePessoas);

//RETORNE AS PESSOAS CUJO NOME TERMINA COM "A"
const ultimaLetraA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(ultimaLetraA);