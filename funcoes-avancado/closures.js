/*
CLOSURE ==> HABILIDADE DA FUNÇÃO EM ACESSAR O ESCOPO LÉXICO
*/

function retornaFuncao() {
    const nome = 'Marcos';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();

console.log(funcao);
console.dir(funcao); //MESMA COISA DO CONSOLE.LOG