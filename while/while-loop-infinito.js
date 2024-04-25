let x = 1;
while (x < 10) {
    console.log(x);
    if(x === 5) {
        break;
    }
    x++;
}

console.log('FIM DO LOOP WHILE COM BREAK!');

// let y = 1;
// while (y < 10) {
//     console.log(x);
//     if(y === 5) {
//         continue;
//     }
//     y++;
// }

// console.log('LOOP INFINITO!!!!!!!!!!!!!!!');

let y = 1;
while (y < 10) {
     if(y === 5) {
        y++
        continue;
    }
    console.log(y);
    y++;
}

console.log('SAIR DO LOOP INFINITO!!!!!!!!!!!!!!!');