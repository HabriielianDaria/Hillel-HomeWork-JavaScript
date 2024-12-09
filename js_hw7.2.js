/*function isValidString(str) {
    const regex = /\b[^aA\s,]{6,}\b/g;
    return regex.test(str);
}

var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";

console.log(isValidString(str));  
console.log(isValidString("Wonderful")); 
console.log(isValidString("Oxford"));    
console.log(isValidString("H@ppiness")); 
console.log(isValidString("Time"));      
console.log(isValidString("Task"));      
console.log(isValidString("Apple"));    
console.log(isValidString("Daria4")); 
console.log(isValidString("Dorio")); 
console.log(isValidString("Dorio5")); */


function isValidString(str) {
    const words = str.split(/\s*,\s*/); 
    const regex = /^[^aA\s,]{6,}$/;  
    words.forEach(word => {
        console.log(`${word}: ${regex.test(word)}`);
    });
    return true; 
}

var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
isValidString(str);

console.log(isValidString("Daria4")); 
console.log(isValidString("Dorio")); 
console.log(isValidString("Dorio5"));


