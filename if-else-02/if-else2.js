const numero = 10;

if (2 === 2) {
  console.log('LITERAL'); //SERÁ MOSTRADO POIS É OUTRO BLOCO IF. SE HOUVER OUTRO BLOCO IF ABAIXO E FOR VERDADEIRO, SERÁ LIDO E MOSTRADO
}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8.')
} else if(1 === 1) { //VERDADEIRO
  console.log('Por ser verdadeiro, a leitura do código para aqui, e mesmmo que tenha outro verdadeiro lá embaixo, não será lido (DENTRO DO BLOCO IF)')
} //lógica INCORRETA
  else if (numero >= 9 && numero <= 11) { //VERDADEIRO 
  console.log ('O número está entre 9 e 11.')
} else {
  console.log ('O número NÃO está entre 0 e 11.')
}

console.log('... Aqui vai o resto do código, pois está fora do bloco IF e a engine do JS continua a leitura a partir daqui.');