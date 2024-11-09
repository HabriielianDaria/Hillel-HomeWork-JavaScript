/*Підносити до ступеня можемо коли:
y = 0
y - від'ємне
y - додатнє */ 

function pow(x, y) {
    if (y === 0) return 1; 
    let result = 1;
    
    let positiveY = Math.abs(y);
    for (let i = 0; i < positiveY; i++) {
        result *= x; //множимо x на себе y разів
    }
    if (y < 0) { 
        return 1 / result;
    }
    return result;
}

console.log(pow(10, 0)); 
console.log(pow(12, 2)); 
console.log(pow(-1, -7)); 
  
