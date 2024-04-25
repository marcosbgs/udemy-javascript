// Escreva	um	programa	para	ler	3	valores	inteiros	e	escrever	o	maior	deles.	
// Considere	que	o	usuário	não	informará	valores	iguais.

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert('ERRO! Os número não podem ser iguais!');
} else {
    alert('O maior número é: ' + Math.max(num1, num2, num3));
}