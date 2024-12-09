function isValidString(str) {
    const regex = /\b[^aA\s,]{6,}\b/g;  
    const matches = str.match(regex);    
    return matches || [];              
}

var str = "Wonderful, Joyful, Happiness, Time, Task, Apple";

console.log(isValidString(str));  



