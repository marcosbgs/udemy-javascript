// //               0  1  2  3  4  5  6  7  8 
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero, terceiroNumero); //ao inves de criar cada variável em uma linha separada, podemos criar todas de uma vez como se fosse array. Todas as variáveis são CONST
// console.log(resto);


const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, , terceiroNumero, , quintoNumero, , setimoNumero, ...resto] = numeros; //escolhe um número e pula outro número com espaço vazio
console.log(primeiroNumero, terceiroNumero, quintoNumero, setimoNumero); 

//                   0          1          2     INDICE DOS TRÊS ARRAYS
//                0  1  2    0  1  2    0  1  2  ÍNDICE DOS ELEMENTOS DENTRO DO ARRAY
const numero1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [, [,,seis]] = numero1;

console.log(numero1[1][2]);
console.log(seis);