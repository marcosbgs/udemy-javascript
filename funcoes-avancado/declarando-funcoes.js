//Declaração de função (function hoisting)
//a engine do JS eleva a função e as variaveis declaradas com VAR para o topo
//posso chamar a função antes de declarar

function falaOi() {
    console.log('Oi');
}

falaOi();

//first-class objects - pode tratar as funções como dados. A função é um tipo de dado.
//Function Expression
const souUmDado = function nomeDaFuncao () {
    console.log('Sou um dado.');
};

souUmDado();

//arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};

funcaoArrow();