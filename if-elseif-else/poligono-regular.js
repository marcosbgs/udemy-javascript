// Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
// e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
// − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
// área
// − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
// sua	área.	
// − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.

let ladoPoligono = Number(prompt('Digite um número de 3 a 6. Esse será o número de lados de um polígono: '));
let medidaLado = Number(prompt('Digite o lado do polígono em centímetros: '));

const apotema = 2.65;

let areaTriangulo = (Math.pow(medidaLado, 2) * Math.sqrt(3)) / 4;
let areaQuadrado = Math.pow(medidaLado, 2);
let areaPentagono = 5 * medidaLado * apotema;
let areaHexagono = (Math.pow(medidaLado, 2) * 3 * Math.sqrt(3)) / 2;

if (ladoPoligono == 3) {
    alert(`O polígono é um TRIÂNGULO e sua área é ${areaTriangulo.toFixed(3)} cm².`);
} else if (ladoPoligono == 4) {
    alert(`O polígono é um QUADRADO e a sua área é ${areaQuadrado.toFixed(3)} cm².`);
} else if (ladoPoligono == 5) {
    alert(`O polígono é um PENTÁGONO e a sua área é ${areaPentagono.toFixed(3)} cm².`);
} else if (ladoPoligono == 6) {
    alert(`O polígono é um HEXÁGONO e a sua área é ${areaHexagono.toFixed(3)} cm².`);
} else if (ladoPoligono > 6) {
    alert(`POLÍGONO NÃO IDENTIFICADO!`);
} else {
    alert(`NÃO É UM POLÍGONO!`);
}
