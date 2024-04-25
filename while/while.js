/*
Ideal quando NÃO SABEMOS quantas vezes será executado.
DO ... WHILE: executa ao menos UMA VEZ, mesmo que na primeira vez, a condição SEJA FALSA
*/

// let n = parseInt(prompt('Digite um número:'));

// let contador = 0

// while(contador <= 1000) {
//     document.write(`${n} x ${contador}: ${n * contador} <br>`);
//     contador++
// }

// document.write('SAIU DO LOOP!');


let mes = parseInt(prompt('Digite um número de 1 a 12:'));

let contador = 0;

while(contador <= 12) {
    document.write(`O seu ano começa a partir do mês: ${mes*contador}. <br>`)
    contador++
}
