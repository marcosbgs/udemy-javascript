// Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
//     1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
//     Fórmulas:	
//     - para	homens:	(72.7	*	Altura)	– 58	
//     - para	mulheres:	(62.1	*	Altura)	– 44.7	


const feminino = '1';
const masculino = '2';

let altura = parseFloat(prompt('Digite sua altura: '));
let sexo = prompt('Digite o número correspondente ao seu sexo: Feminino: 1 / Masculino: 2');

let pesoMulheres = (62.1 * altura) - 44.7;
let pesoHomens = (72.7 * altura) - 58;

if (sexo === feminino) {
    alert(`O seu peso ideal é: ${pesoMulheres}`);
} else {
    alert(`O seu peso ideal é: ${pesoHomens}`);
}
