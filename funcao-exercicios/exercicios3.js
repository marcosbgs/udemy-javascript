/*
Escreva uma função que recebe um número e retorne o seguinte:
- Número é divisível por 3 = Fizz
- Número é divisível por 5 = Buzz
- Número é divisível por 3 e 5 = FizzBuzz
- Número NÃO é divisível por 3 e 5 = Retorna o próprio número
- Checar se um número é realmente um número
- Use a função com números de 0 a 100
*/

// const min = 0;
// const max = 100;

// function random(min, max) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }

// const num = random;

function fizzBuzz(num) {
    if (Number.isInteger(num)) {
        if (num % 3 == 0 && num % 5 == 0) {
            return 'FizzBuzz';
        } else if (num % 5 == 0 && num % 3 !== 0) {
            return 'Buzz';
        } else if (num % 3 == 0 && num % 5 !== 0) {
            return 'Fizz';
        } else {
            return num;
        }
    } else {
        return NaN;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}




