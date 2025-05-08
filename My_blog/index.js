
function isPrime(number){
    if(number == 2){
        return true;
    }
    // let x = Math.ceil(number**0.5);
    let count = 0;
    let x = 2;
    while(x < 10){
        
        if(number % x == 0){
            count = count + 1;
        }
        x--;
    }
    if (count == 0){
        return true;
    }
    else{
        return false;
    }
}

const array = (array, item, index){
    
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(34));
console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(6));