/*
o mês em JS começa a partir do 0.
0 janeiro
1 fevereiro
2 março
3 abril
4 maio
5 junho

o dia começa no 0
0 DOMINGO
1 SEGUNDA
2 TERÇA
3 QUARTA
4 QUINTA
5 SEXTA
6 SÁBADO

 */
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); //quando se usa new, é porque é uma função construtora. E sempre começa com letra maiúscula
//const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mês, dia, hora, minuto, segundo, milésimo de segundo
//const data = new Date ('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() +1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);