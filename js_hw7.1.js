var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const emailRegex = /\b([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)@[a-zA-Z0-9]+\.[a-zA-Z]{2,}\b/;

function getValidUsers(users) {
    return users.filter(user => 
        emailRegex.test(user.email) && !user.email.includes('mail.ru') 
    );
}

const validEmails = getValidUsers(arr);
console.log("Коректні користувачі з валідними email:");
console.log(validEmails);