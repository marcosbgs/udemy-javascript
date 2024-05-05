// Calculadora de Média:
// Escreva uma função que receba três números como argumentos e retorne a média aritmética desses números.

function media (a, b, c) {
    return (a + b + c) / media.length;
}

console.log(media(2, 2, 3));

// Verificador de Palíndromo:
// Crie uma função que verifique se uma palavra fornecida como argumento é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).


function palindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(palindromo('ama'));