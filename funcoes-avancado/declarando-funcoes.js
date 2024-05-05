//Declaração de função (function hoisting)
//a engine do JS eleva a função e as VARIÁVEIS DECLARADAS COM VAR para o topo
//posso chamar a função antes de declarar

function falaOi() {
    console.log('Oi');
}

falaOi();

//first-class objects - pode tratar as funções como dados. A função é um tipo de dado.
//FUNCTION EXPRESSION

const nomeVariavel = function (PARAMETROS) {
    console.log(PARAMETROS);
}
nomeVariavel('ARGUMENTOS');

const souUmDado = function nomeDaFuncao () { //não é muito comum nome da função 
    console.log('Sou um dado.');
};

souUmDado();


const souUmDado2 = function nomeDaFuncao2 () { //mais comum declarar sem o nome
    console.log('Sou um dado 2.');
};

souUmDado();
souUmDado2();

//arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};

funcaoArrow();