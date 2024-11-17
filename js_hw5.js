let property = {
  address: "вул. Предславинська, 9",
  area: 150,
  price: 2500000,  
  getInfo: function() {
    for (let prop in this) {
      if (this.hasOwnProperty(prop) && typeof this[prop] !== 'function') { // перевіряю, чи виводить значення властивості, а не функцію
        console.log(`${prop}: ${this[prop]}`); // prop - це ключ, а this[prop] - значення цього ключа(властивості)
              }
    }
  }
};

property.getInfo(); //викликаю метод

// Додаю нові властивості до об'єкта
property.owner = "Daria Habriielian";
property.yearBuilt = 1998;

// Викликаю метод getInfo після додавання нових властивостей
console.log("\nПісля додавання нових властивостей:");
property.getInfo();
