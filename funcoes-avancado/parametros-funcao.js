// a função declarada com a palavra FUNCTION tem uma variável especial chamada ARGUMENTS que sustenta todos os argumentos enviados
// se eu criar a variável e não enviar o argumento para os paramêtros, ficará como UNDEFINED


// function funcao (paramêtros) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(argumentos);


// function funcao (a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function funcao (a, b = 0, c = 4) { //caso eu não envie um argumento, o b valerá 0 por padrão, uma vez que eu defini.
//     console.log(a + b + c); //se eu mandar apenas um argumento, ficará como NaN, pois number + undefined = NaN;
// }
// funcao(2, 20, undefined); // se eu enviar UNDEFINED, o C assume o valor padrão 4. Se eu colocar o valor NULL, será como se fosse 0. 

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