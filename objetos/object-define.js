//==> Object.defineProperty = UMA PROPRIEDADE
//==> Object.defineProperties = VÁRIAS PROPRIEDADES

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave 'estoque' se fo true
        value: estoque, //valor da chave
        writable: true, //controla se o valor pode ou não ser alterado
        configurable: true, //não pode reconfigurar a propriedade estoque ou DELETAR. sim ou não?
    })

    Object.defineProperties(this, { //CONTROLA MAIS DE UMA PROPRIEDADE
        nome: {
            enumerable: true, //mostra a chave 'estoque' se fo true
            value: nome, //valor da chave
            writable: true, //controla se o valor pode ou não ser alterado
            configurable: true, //não pode reconfigurar a propriedade estoque ou DELETAR. sim ou não?
        },
        preco: {
            enumerable: true, //mostra a chave 'estoque' se fo true
            value: preco, //valor da chave
            writable: true, //controla se o valor pode ou não ser alterado
            configurable: true, //não pode reconfigurar a propriedade estoque ou DELETAR. sim ou não?
        }
    })
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1)); //se ENUMERABLE for TRUE, vai aparecer no console

for (let chave in p1) { //se ENUMERABLE for TRUE, vai aparecer no console
    console.log(chave);
}