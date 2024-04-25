let nomes = ['João', 'Daniel', 'Beatriz', 'Vinicius', 'Felipe'];

let nomeDigitado = prompt('Digite seu nome: ')

nomes[nomes.length] = nomeDigitado;

for(let i = 0; i < nomes.length; i++) {
    alert(`Nome: ${nomes[i]}`);
}

alert(`A lista de nomes possui ${nomes.length} elementos.`);