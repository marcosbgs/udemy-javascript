// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// console.log('Segue a vida...');

//NÚMERO ALEATÓRIO

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// const min = 1;
// const max = 50;
// let rand = random(min, max);
// console.log(rand);


// while (rand !== 10) {
//     rand = random(min, max);
//     console.log(rand);
// }

const min = 1;
const max = 50;
let rand = 10;


while (rand !== 10) {
    console.log(rand);
}

console.log('---------------------------------------------------------');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);