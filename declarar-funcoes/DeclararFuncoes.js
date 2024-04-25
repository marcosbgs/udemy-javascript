//DECLARAÇÃO DE FUNÇÃO (FUNCTION HOISTING) -posso chamar a função antes de declarar ela
falaOi();
function falaOi () {
    console.log('Oi');
}

//FIRST-CLASS OBJECTS (OBJETO DE PRIMEIRA CLASSE)
//A FUNÇÃO PODE SER USADA COMO UM DADO
//UMA CONSTANTE PODE RECEBER UMA FUNÇÃO COMO DADO
//PODE JOGAR ESSA CONSTANTE COMO UM PARAMETRO DE OUTRA FUNÇÃO
//FUNCTION EXPRESSION
const souUmDado = function nomeDaFuncao () {  //geralmente não coloca o nome da função
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado); //o parametro recebido é uma função

//ARROW FUNCTION AE6

const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}
funcaoArrow();

//DENTRO DE OBJETO

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();