/*
&& - AND - true && false && true && true && true; curto circuito = a partir do momento em que possui um false, não há mais leitura. Para a leitura no primeiro false que encontrar
|| - OR - 0 || false || null || true || 'Marcos' - vai retornar o primeiro valor verdadeiro que encontrar; 

FALSY - avaliam em falso em JS
- false - valor literal
0
"" '' `` 
null / undefined
NaN

*/
//console.log('Marcos Vinicius' && 9 && 'João'); //se tudo for verdadeiro,ele irá retornar a última.

/*function falaOi () {
  return 'Oi';
}

let vaiExecutar = 'João';
console.log(vaiExecutar && falaOi());*/

//console.log(0 || false || null || true || 'Marcos');

//const corUsuario = 'Verde';
//const corPadrao = corUsuario || 'red'; //vai retornar o 'Verde' pois foi o primeiro valor verdadeiro que encontrou

//console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //é uma STRING, por isso foi avaliada em VERDADEIRO e foi exibido.
const d = false;
const e = NaN;

console.log(a || b || c || d || e);