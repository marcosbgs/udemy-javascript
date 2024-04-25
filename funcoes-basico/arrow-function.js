function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

//DECLARAR UMA FUNÇÃO
function nomeFuncao() {

}

//const nomeFuncao = parametro => `Seria o return de uma declaração de uma função ${parametro}`

//Arrow Function
//usa-se sempre o CONST
//jeito rápido e fácil de escrever função
//na questão de HOISTING, arrow function se comporta como na expressão de função

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 1 a 9.';
    } else {
        return num1 + num2;
    }
}