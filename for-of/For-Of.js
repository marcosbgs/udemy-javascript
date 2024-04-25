const nome = 'Marcos Vinicius';
const nome1 = ['Marcos', 'Vinicius', 'Braga', 'Souza'];

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

for (let valor of nome) { //ao invés de retorna o índice, retorna o valor do índice
  console.log(valor);
}
