/*
-> RECEBE UM ARRAY DO MESMO TAMANHO DO ARRAY ORIGINAL COM VALORES ALTERADOS
-> RETORNA UM NOVO ARRAY
-> RECEBE UMA FUNÇÃO DE CALLBACK
-> ALTERA O OBJETO ORIGINAL
*/

//DOBRE OS NÚMEROS -> 5 * 2 = 10, 50 * 2 = 100....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor * 2);
//console.log(numerosDobrados);

//RETORNE APENAS UMA STRING COM O NOME DA PESSOA
//REMOVA APENAS A CHAVE "NOME" DO OBJETO
//ADICIONE UMA CHAVE ID EM CADA OBJETO
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//const nomePessoaString = pessoas.map(objeto => objeto.nome); --> ALTERA O OBJETO ORIGINAL
//console.log(nomePessoaString);

//const removendoNome = pessoas.map(objeto => delete objeto.nome); --> ALTERA O OBJETO ORIGINAL
//console.log(pessoas);

const addChaveId = pessoas.map(function(objeto, indice){
    const novoObjeto = {...objeto}; //PARA NÃO ALTERAR O OBJETO ORIGINAL
    novoObjeto.id = indice + 1;
    //objeto.id = indice + 1; //ALTERA O ARRAY ORIGINAL
    return novoObjeto;
});
console.log(pessoas);
//console.log(addChaveId);