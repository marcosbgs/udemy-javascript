// As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
// dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
// programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
// valor	total	da	compra.

const preco1 = 0.30;
const preco2 = 0.25;

let numeroMaca = parseInt(prompt('Digite quantas maçãs deseja comprar: '));

let resultado1 = numeroMaca * preco1;
let resultado2 = numeroMaca * preco2;

if (numeroMaca < 12) {
    alert(`O valor total da sua compra é: ${resultado1.toFixed(2)}`);
} else {
    alert(`O valor total da sua compra é: ${resultado2.toFixed(2)}`);
}