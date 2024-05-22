//MAIS UTILIZADA PARA REDUZIR O ARRAY A UM ÚNICO ELEMENTO
//SOME TODOS OS NÚMEROS (REDUCE)
//RETORNE UM ARRAY COM OS PARES (FILTER)
//RETORNE UM ARRAY COM O DOBRO DOS VALORES (MAP)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

const total2 = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
        return acumulador;
}, []);
console.log(total2);

const total3 = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total3);

//RETORNE A PESSOA MAIS VELHA

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);