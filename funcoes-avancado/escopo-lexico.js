/*
A FUNÇÃO PROCURA A VARIÁVEL DENTRO E FORA DELA. 
SE NÃO ENCONTRAR NO SEU ESCOPO,PROCURA NO ESCOPO PAI, SE NÃO ENCONTRAR, PROCURA NO ESCOPO DO PAI DO PAI E ASSIM POR DIANTE
*/

const nome = 'Marcos';

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Vinicius'; //CONTINUARÁ MOSTRANDO O NOME = MARCOS PORQUE A FUNÇÃO falaNome(); reconhece o seu escopo. E como a variável nome = VINICIUS NÃO ESTÁ EM SE ESCOPO, NÃO VAI SER LIDA.
    falaNome();
}

usaFalaNome();