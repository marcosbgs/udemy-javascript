//==> defineProperty --> Getter e Setters

//GETTER ==> OBTER VALOR // mostra o valor
//SETTER ==> CONFIGURAR O VALOR
//==> geralmente não usamos VALUE e WRITABLE junto com get e set. get e set já vão definir se o valor pode ou não ser alterado ou determinar o valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave 'estoque' se fo true
        configurable: true, //não pode reconfigurar a propriedade estoque ou DELETAR. sim ou não?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError ('Valor Inválido!'); 
            }

            estoquePrivado = valor;
        }
    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'fgsdfds';
console.log(p1.estoque);