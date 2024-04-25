// Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
// escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
// − Triângulo	Equilátero:	possui	os	3	lados	iguais.	
// − Triângulo	Isóscele:	possui	2	lados	iguais.	
// − Triângulo	Escaleno:	possui	3	lados	diferentes.


let ladoA = parseInt(prompt('Digite o lado A do triângulo: '));
let ladoB = parseInt(prompt('Digite o lado B do triângulo: '));
let ladoC = parseInt(prompt('Digite o lado C do triângulo: '));

if (ladoA === ladoB && ladoC === ladoA && ladoC === ladoB) {
    alert('Isto é um triângulo EQUILÁTERO. Possui três lados iguais.');
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    alert('Isto é um triângulo ISÓSCELES. Possui dois lados iguais.');
} else {
    alert('Isto é um triângulo ESCALENO. Possui três lados diferentes.');
}
