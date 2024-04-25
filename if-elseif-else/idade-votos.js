// Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

let anoNascimento = Number(prompt('Digite o ano do seu nascimento: '));
let idadeVoto = new Date().getFullYear() - anoNascimento;

if (idadeVoto >= 18) {
    alert(`Você tem ${idadeVoto} anos e pode votar!`);
} else {
    alert(`Você tem ${idadeVoto} anos e NÃO pode votar ainda!`);
}