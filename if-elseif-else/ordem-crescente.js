// Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
//     serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente.

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));

let numeros = [num1, num2, num3];

numeros.sort((a, b) => a - b);

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert('ERRO! Os número não podem ser iguais!');
} else {
    alert(`A ordem dos números é: ${numeros}`);
}