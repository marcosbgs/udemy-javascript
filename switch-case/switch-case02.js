/*
Pedir para o usuário digitar um número de 0 a 6. Mostrar uma mensagem informando qual o dia da 
semana correspondente. Domingo (0) até Sábado (6). Exemplo: se o usuário digitar 3, deve mostrar "Quarta-feira".
switch sempre vai comparar IGUALDADE
switch sempre vai comparar VALOR E TIPO
NUNCA ESQUECER O BREAK
*/

// let n = prompt("Digite um número de 0 a 6: ");

// switch (n) {
//   case "0":
//     alert("Domingo");
//     break;
//   case "1":
//     alert("Segunda-feira");
//     break;
//   case "2":
//     alert("Terça-feira");
//     break;
//   case "3":
//     alert("Quarta-feira");
//     break;
//   case "4":
//     alert("Quinta-feira");
//     break;
//   case "5":
//     alert("Sexta-feira");
//     break;
//   case "6":
//     alert("Sábado");
//     break;
//   default:
//     alert("Número incorreto! Por favor, digite um número de 1 a 6.");
// }




let entrada = false;

switch (typeof entrada) {
    case 'number':
        console.log(`O valor da entrada: ${entrada} é do tipo Number.`);
        break;
    case 'string':
        console.log(`O valor da entrada: ${entrada} é do tipo String.`);
        break;
    case 'boolean':
        console.log(`O valor da entrada: ${entrada} é do tipo Boolean.`);
        break;
    case 'null':
        console.log(`O valor da entrada: ${entrada} é do tipo Null.`);
        break;
    case 'undefined':
        console.log(`O valor da entrada: ${entrada} é do tipo Undefined.`);
        break;
    default:
        console.log('Por favor, digite um tipo válido.');
}