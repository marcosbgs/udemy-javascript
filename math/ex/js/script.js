const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = Math.sqrt(numero);
const raiz_quadrada = document.getElementById('raiz-quadrada');
const inteiro = Number.isInteger(numero);
const num_inteiro = document.getElementById('numero-inteiro');
const nan = Number.isNaN(numero);
const not_a_number = document.getElementById('not-a-number');
const arredondado_baixo = Math.floor(numero);
const arredondado_para_baixo = document.getElementById('arredondado-baixo');
const arredondado_cima = Math.ceil(numero);
const arredondado_para_cima = document.getElementById('arredondado-cima');
const decimal = numero.toFixed(2);
const casa_decimal = document.getElementById('casa-decimal');

numeroTitulo.innerHTML = numero;
raiz_quadrada.innerHTML = raiz;
num_inteiro.innerHTML = `<p>${numero} é inteiro: ${inteiro}</p>`
not_a_number.innerHTML = nan;
arredondado_para_baixo.innerHTML = arredondado_baixo;
arredondado_para_cima.innerHTML = arredondado_cima;
casa_decimal.innerHTML = decimal;


//texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}</p>`;