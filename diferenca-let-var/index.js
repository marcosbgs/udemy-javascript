const verdadeira = true

/*
- LET tem escopo de bloco
- VAR tem escopo de função - respeita o escopo apenas se estiver dentro de uma FUNCTION
- cada LET abaixo é uma variável DIFERENTE
 */

// let nome = 'Marcos'; //NÃO PODE REDECLARAR LET
// var nome2 = 'Marcos';

// if (verdadeira) {
//   let nome = 'Vinicius'; //criando (não é a mesma variável da de cima)
//   console.log(nome, nome2);

//   if (verdadeira) {
//     //let nome = 'Outra coisa'; //o motor do JS procura a variável nesse escopo, caso não encontre, vai pra outro escopo e assim por diante até achar uma variável nome
//     console.log(nome, nome2);
//   }
// }

let nome = 'Marcos'; //NÃO PODE REDECLARAR LET
var nome2 = 'Marcos';

var nome2 = 'Vinicius'; //foi REDECLARADA
console.log(nome, nome2);

if (verdadeira) {
  let nome = 'Vinicius'; 

  if (verdadeira) {
    let nome = 'Outra coisa'; 
  }
}


function falaOi () {
  var nome = 'Marcos';
}

// console.log(nome); //como a variável foi declarada dentro da função, só será acessada dentro da função. 
// falaOi();

// var nome = 'Marcos';

// function falaOi () {
//   console.log(nome); //como a variável foi declarada fora da função, ela pode ser acessada mesmo assim, é o que chamamos de closure.
// }

// falaOi();



function falaOi () {
  if (verdadeira) {
    let nome = 'Marcos';
    var sobrenome = 'Vinicius'
  }
  //console.log(nome); //por ser LET, a variável NOME não será acessada por estar FORA do escopo de IF.
  console.log(sobrenome); //mesmo estando fora do escopo de IF, a variável SOBRENOME será lida por estar DENTRO do escopo da FUNCTION
}
falaOi();