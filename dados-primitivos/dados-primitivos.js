/*
Primitivos (IMUTÁVEL) - apontam para lugares diferentes na mémoria; SÃO COPIADOS - string, number, boolean, undefined, null (bignit, symbol) 

Referência (MUTÁVEL) - apontam para o mesmo valor na mémoria. Se alterar um, altera o outr; SÃO PASSADOS POR REFERÊNCIA PARA UM MESMO VALOR NA MÉMORIA  - array, object, function
*/

/*let nome = 'Marcos';
nome = 'Vinicius';
nome = 'Marcos';
console.log(nome[2]);*/

/*let a = 'A';
let b = a; //está copiando o valor de a para o b
console.log(a, b)
a = 'Socorro';
console.log(a, b); //valor de b continua A porque foi feita uma cópia de a para b (linha 11)*/

let a = [1, 2, 3];
let b = a; //NÃO É CÓPIA, É PASSADO POR REFERÊNCIA E OS DOIS APONTAM PARA O MESMO VALOR NA MÉMORIA. SE MUDAR O a, MUDA TAMBÉM O b.
let c = b;
console.log(a, b);

a.push(4); //mesmo mexendo em a, o b será alterado.
console.log(a, b);

b.pop();
console.log(a, b, c);
a.push('marcos');
console.log(a, b, c);