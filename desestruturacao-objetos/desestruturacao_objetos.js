const pessoa = {
  nome: 'Marcos',
  sobrenome: 'Vinicius',
  idade: 29,
  endereco: {
    rua: 'Avenida Retiro dos Imigrantes',
    numero: 1498,
    complemento: 'APTO 204-A'
  }
};

//Atribuição via desestruturação - Objetos
const {nome, sobrenome, idade, endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);