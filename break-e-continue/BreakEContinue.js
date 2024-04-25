const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; //AO ENCONTRAR A PALAVRA CONTINUE, A ENGINE PULA PARA A PRÓXIMA INTERAÇÃO SEM EXECUTÁ-LA
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Número 7 encontrado. Programa parado...')
        break; //AO ENCONTRAR A CONDIÇÃO, PARA A EXECUÇÃO.
    }
    
}