/*
o loop FOR é usado quando EU SEI quantas vezes será executado.

for(let variavel = x; condição; incremento){
    
}
*/


let n = parseInt(prompt('Digite um número:'));

for(let i = 0; i <= 100; i++) {
    document.write(`${n} x ${i}: ${n * i} <br>`);
}