/*
# Mesmo não passando nenhum parâmetro na declaração da FUNÇÃO, ao colocar um argumento dentro da função, ficará armazenado na 
VARIÁVEL ESPECIAL ARGUMENTS.
# ARGUMENTOS são valores enviados para os parâmetros

*/

// function funcao(a, b, c) {
//     console.log(a, b,c, arguments);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Marcos');

// function funcao(a, b, c, d, e, f) {  //mesmo não passando todos os argumentos, o JS atribui o valor padrao as variável - UNDEFINED
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

function funcao2 (a, b = 2, c = 4) {
    //b = b || 0; //valor padrão para b (forma antiga)
    console.log(a + b + c);
}
funcao2(2, undefined, 20); //se aparecer so um parametro, será considerado NaN (2 + undefined)
                          //se eu quiser que o B assuma o valor padrão, devo enviá-lo como UNDEFINED
                         //se colocar NULL, não vai assumir o valor padrão e sim 0.