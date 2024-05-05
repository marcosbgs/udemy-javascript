// a função declarada com a palavra FUNCTION tem uma variável especial chamada ARGUMENTS que sustenta todos os argumentos enviados
// se eu criar a variável e não enviar o argumento para os paramêtros, ficará como UNDEFINED


function funcao () {
    console.log(a, b, c, d, e, f);
}


function funcao2 () { //NÃO DEFINI PARÂMETRO
    console.log(arguments) //"arguments" armazena todos os argumentos da função, mesmo que eu não tenha criado nenhum parâmetro.
}
funcao2(1, 2, 3, 'a', 'b', 'c', 'd', 'e', 'f'); //PASSEI ARGUMENTOS E NÃO DEU ERRO. 


function funcao3 (a, b, c, d, e, f) { //DEFINI 6 PARÂMETROS
    console.log(a, b, c, d, e, f) //
}
funcao3(1, 2, 3, 4, 5, 6, 7); // COLOQUEI 7 ARGUMENTOS, 1 A MAIS.
funcao3(1, 2, 3); //COLOQUEI ARGUMENTOS A MENOS => DA LETRA D EM DIANTE FICA COMO "UNDEFINED"


function funcao4 (a, b, c) {
    console.log(a + b + c)
}
funcao4(2, 5); //A FUNÇÃO TEM 3 PARÂMETROS, MAS SE EU PASSAR APENAS DOIS ARGUMENTOS PARA A FUNÇÃO, POR SE TRATAR DE OPERAÇÃO MATEMÁTICA, O RESULTADO SERÁ "NaN". O ARGUMENTO "C" FICARÁ COMO "UNDEFINED". PARA ISSO NÃO OCORRER, TENHO QUE DEFINIR UM VALOR PADRÃO NO PARÂMETRO


function funcao5 (a, b = 0, c = 4) { //CASO EU NÃO ENVIE O ARGUMENTO PARA "B" E "C", AMBOS IRÃO ASSUMIR O VALOR PADRÃO DEFINIDO AQUI. "b = 0" E "c = 4"
    console.log(a + b + c); 
}
funcao5(2, undefined, 20); //NÃO QUERO PASSAR O VALOR DE "B". SOMENTE O VALOR DE "A" E "C", PRECISO ESCREVER "UNDEFINED" PARA QUE O "B" ASSUMA O VALOR PADRÃO. SE PASSAR STRING VAZIA, VAI CONCATENAR = 220; 
// funcao5(2, , 20); ==> NÃO POSSO PASSAR O VALOR DE "B" VAZIO. DA ERRO DE SINTAXE!!!




function conta (operador, acumulador, ...numeros) { // ... rest operator. O restante dos argumentos vai todos para esse paramêtro. o paramêtro resto tem que ser o último
    for(let numero of numeros) {
        if (operador == '+') acumulador += numero;
        if (operador == '-') acumulador -= numero;
        if (operador == '*') acumulador *= numero;
        if (operador == '/') acumulador /= numero;
    }

    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);