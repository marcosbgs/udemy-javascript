// for (let contador = 1; contador <= 100; contador++) {
//     if (contador % 3 == 0) {
//         console.log(contador);
//     }
// }

// for (let contador = 0; contador < 15; contador++) {
//     console.log(contador);
// };

// const numero = prompt('Digite um número para gerar a tubuada: ');

// for (let contador = 1; contador <= 10; contador++) {
//     console.log(`${numero} X ${contador} = ${numero * contador}`);
// };

// function numeroAleatorio() {
//     return Math.ceil(Math.random() *100);
// };

// for (let contador = 1; contador <= 10; contador++) {
//     console.log(numeroAleatorio());
// };

// const span = document.querySelector('span');

// span.addEventListener('click', function() {
//     alert('Clicou!');
// });

// const button = document.querySelector('button');
// const div = document.querySelector('#card');
// const paragrafos = document.querySelectorAll('p');

// button.addEventListener('click', function() {
//     div.classList.toggle('cardClick');
//     paragrafos.forEach(function(paragrafo) {
//         paragrafo.classList.toggle('desapareceParagrafo');
//     });
// });


// const lista = document.querySelector('#lista');

// const body = document.querySelector('body')
// const novoButton = document.createElement('button');
// novoButton.innerText = 'Inserir';
// body.appendChild(novoButton);

// novoButton.addEventListener('click', function() {
//     const novaLi = document.createElement('li');
//     novaLi.innerText = 'Nova Entrada';
//     lista.appendChild(novaLi);
// });

// const adicionandoClasseHide = document.querySelector('#modal');
// adicionandoClasseHide.classList.add('hide');

// const button = document.querySelector('button');
// const imagem = document.querySelector('#close');

// button.addEventListener('click', function() {
//     adicionandoClasseHide.classList.remove('hide');
// });

// imagem.addEventListener('click', function() {
//     adicionandoClasseHide.classList.add('hide');
// });


// const elementosAzuis = document.querySelectorAll('.azul');

//     elementosAzuis.forEach(elemento => {
//     elemento.classList.remove('azul');
//     elemento.classList.add('vermelho');
//     });

// const elementosVermelhos = document.querySelectorAll('.vermelho');

// if(elementosVermelhos.classList.contains('vermelho') === true) {

//    elementosVermelhos.forEach(elemento => {
//     elemento.classList.remove('vermelho');
//     elemento.classList.add('azul');
//     }); 
// };

// const elementosAzuis = document.querySelectorAll('.azul');
// elementosAzuis.forEach(elemento => {
//     if (elemento.classList.contains('azul')) {
//         elemento.classList.remove('azul');
//         elemento.classList.add('vermelho');
//     }
// });

// const elementosVermelhos = document.querySelectorAll('.vermelho');
// elementosVermelhos.forEach(elemento => {
//     if (elemento.classList.contains('vermelho')) {
//         elemento.classList.remove('vermelho');
//         elemento.classList.add('azul');
//     }
// });


















const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 1 a 9.';
    } else {
        return num1 + num2;
    }
}