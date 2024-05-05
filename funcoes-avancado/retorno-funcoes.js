/*
RETURN
retorna um valor
termina a função após usar o RETURN
CONSOLE.LOG != RETURN
*/


function soma(a, b) {
  return a + b;
}
console.log(soma(25, 36));

function criaPessoa(nome, sobrenome) {
  return {nome, sobrenome};
}
const p1 = criaPessoa('Marcos Vinicius', 'Braga de Souza');
console.log(p1);


function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));