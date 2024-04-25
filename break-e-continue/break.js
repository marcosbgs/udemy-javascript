for (let i = 1; i < 10; i++) {
    console.log(i);
    if(i === 5){
        break;
    }
    
}

console.log('Fim do Loop!');

for (let i = 1; i < 10; i++) {
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('Fim do Loop!');