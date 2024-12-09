function isValidString(str) {
    const regex = /^[^aA]{6,}$/;
    return regex.test(str);
}

console.log(isValidString("Wonderful")); 
console.log(isValidString("Oxford"));    
console.log(isValidString("H@ppiness")); 
console.log(isValidString("Time"));      
console.log(isValidString("Task"));      
console.log(isValidString("Apple"));    
console.log(isValidString("Daria4")); 
console.log(isValidString("Dorio")); //false бо 5 символів
console.log(isValidString("Dorio5")); //true


