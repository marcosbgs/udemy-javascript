//const pessoa1 = {
  //nome: 'Marcos',
  //sobrenome: 'Vinicius',
  //idade: 29
//};


//function criaPessoa (nome, sobrenome, idade) {                   //parametro
  //return {nome, sobrenome, idade};
//}

//const pessoa1 = criaPessoa('Marcos', 'Vinicius', 29);   //argumento; é o que enviamos para os parâmetros
//const pessoa2 = criaPessoa('Marco', 'Tulio', 20);
//const pessoa3 = criaPessoa('João', 'Victor', 30);
//const pessoa5 = criaPessoa('Pedro', 'Henrique', 32);

//console.log(pessoa1.nome, pessoa2.idade);

const pessoa1 = {
  nome: 'Marcos',
  sobrenome: 'Vinicius',
  idade: 29,

  fala () {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade () {
    ++this.idade;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();