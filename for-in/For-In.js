// const frutas = ['Pera', 'Maçã', 'Uva'];

// // for (let i = 0; i < frutas.length; i++) {
// //   console.log(frutas[i]);
// // }

// //FOR IN lê os índices ou chaves do objeto.

// for (let indice in frutas) { //lê os índices do array. Se fosse objeto, leria as chaves.
//   console.log(frutas[indice]);
// }

const pessoa = {
  nome:'MARCOS',
  sobrenome:'VINICIUS',
  idade: 29
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) { //lendo as chaves de um objeto
 console.log(chave, pessoa[chave]);
}