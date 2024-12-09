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


