// Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
// escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
// que:	
// − Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
// − Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
// − Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º)

let anguloA = parseFloat(prompt('Digite o ângulo A do triângulo: '));
let anguloB = parseFloat(prompt('Digite o ângulo B do triângulo: '));
let anguloC = parseFloat(prompt('Digite o ângulo C do triângulo: '));


if(anguloA < 90 && anguloB < 90 && anguloC < 90) {
    alert(`Isto é um Triângulo Acutângulo. Possui ângulos agudos (ângulos menores que 90º)`);
} else if (anguloA == 90 || anguloB == 90 || anguloC == 90) {
    alert(`Isto é um Triângulo Retângulo. Possui um ângulo reto (ângulo igual a 90º)`);
} else {
    alert(`Isto é um Triângulo Obtusângulo. Possui um ângulo obtuso (ângulo maior que 90º)`);
}