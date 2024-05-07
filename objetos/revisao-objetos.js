const pessoa = {    //LITERAL
    nome: 'Marcos',
    idade: 29,
    sexo: 'Masculino',
    endereco: {
        rua: 'Avenida Retiro dos Imigrantes',
        numero: 1498,
        complemente: '204A',
        bairro: 'Retiro',
        cidade: 'Contagem',
        uf: 'MG',
        pais: 'Brasil'
    }
};

console.log(pessoa);

const pessoa1 = new Object(); //CONSTRUTOR

pessoa1.nome = 'João';
pessoa1.sobrenome = 'Victor';
pessoa1.idade = 30;
pessoa1.falaNome = function() {
    console.log(`${this.nome} está falando seu nome!`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falaNome();
console.log(pessoa1.getDataNascimento());
for (let chave in pessoa1){
    console.log(chave);
}

//FACTORY FUNCTIONS
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; //FUNÇÃO GET PARA OBTER O NOME COMPLETO
        }
    };
};

const p1 = criaPessoa('Marcos Vinicius', 'Braga de Souza');
//console.log(p1.nomeCompleto());
console.log(p1.nomeCompleto);


//CONSTRUCTOR FUNCTION
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //NÃO PERMITE QUE O OBJETO POSSA SER ALTERADO. NÃO CONSIGO CRIAR, DELETAR OU QUALQUER OUTRA COISA. TENHO QUE FAZER ANTES DO "FREEZE" DENTRO  DO OBJETO.
};

const p2 = new Pessoa('João', 'Victor');

console.log(p2.nome, p2.sobrenome);