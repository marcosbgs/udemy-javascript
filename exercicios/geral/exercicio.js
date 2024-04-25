function boolToWord( bool ){
    let num1 = Math.random() * (10 - 1) + 1;
    let num2 = Math.random() * (10 - 1) + 1;
    
   console.log(`O número ${num1} é maior que o número ${num2}?`)
    
    if (num1 > num2) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }

 