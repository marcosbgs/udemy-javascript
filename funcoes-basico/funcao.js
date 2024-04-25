// //criando uma função
// //o que está dentro dos parenteses é chamado de parâmetro
// // function saudacao(nome) {
// //   return `Bom dia ${nome}!`;
// // }

// //saudacao('Fernando'); //podemos utilizar a função quantas vezes quisermos

// //const variavel = saudacao('Marcos Vinicius'); //chamar a função
// //console.log(variavel);

// function soma(x = 1, y = 1) { //se eu enviar apenas um parametro, o valor irá somar com o que está no x = 1. Se eu enviar os dois parametros, os valores de x =1  e y=1 não serão utilizados
//  const resultado = x + y;
//  return resultado; //o que estiver depois do RETURN NÃO será executado
// }

// // const resultado = soma(5,2);
// // console.log(resultado); // não consigo acessar o resultado, pois está protegido no escopo da função

// //colocando uma função dentro de uma variável
// //sempre que uma variável recebe uma função, no final coloca ';'
// const raiz = (n) => n ** 0.5; //simplificação de uma função (arrow function)

// console.log(raiz(16));
// console.log(raiz(49));
// console.log(raiz(121));
// console.log(raiz(144));
// console.log(raiz(169));

// const raizNovo = function (n) {
//   return n ** 0.5;
// };

// console.log(raiz(9));
// console.log(raiz(64));
// console.log(raiz(81));
// console.log(raiz(25));
// console.log(raiz(4));


function soma(numero1, numero2) {
  return numero1 + numero2;
}

// console.log(soma(2, 6));
// console.log(soma(58, 64));
// console.log(soma(202, 6100));
// console.log(soma(200, 600));
// console.log(soma(2100, 2900));

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Marcos Vinicius', 29));
console.log(nomeIdade(29, 'Marcos Vinicius')); //ATENÇÃO AO COLOCAR OS PARÂMETROS. TEM QUE COLOCAR NA ORDEM CORRETA

function multiplica(numero1 = 1, numero2 = 1) {  //o número 1 atribuído é o VALOR PADRÃO, para não aparecer UNDEFINED
  return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5))); //passando apenas UM parâmentro irá aparecer o parâmetro que passei e UNDEFINED

//nome de ARGUMENTO pode ser usado mais de uma vez em várias funções. Pois o nome do argumento será válido como exlusivo apenas
//dentro do escopo daquela função.
//boa prática não ter muitos argumentos para uma única função