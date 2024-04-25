/*
Marcos Vinicius Braga de Souza tem 30 anos, pesa 88 Kg
tem 1.7 de altura e seu IMC é de 29.5482555
Marcos Vinicius nasceu em 1980.
*/

const nome = "Marcos Vinicius";
const sobrenome = "Braga de Souza";
const idade = 29;
const peso = 88;
const altura = 1.7;
let imc = peso / altura ** 2;
let anoNascimento = 2023 - idade;

/*console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,
 'Kg e tem', altura, 'de altura e seu IMC é de', imc,'.', 
 nome, 'nasceu em', anoNascimento,'.');*/

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${altura} de altura
e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`); //forma mais moderna de escrever com variáveis.
