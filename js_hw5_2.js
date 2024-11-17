var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  // Створюю метод price() для обчислення загальної вартості
  price: function() {
    let total = 0;
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        total += parseInt(this[service]); //щоб отримати тільки ціле число від ціни  
      }
    }
    return total;
  },

  // Створюю метод minPrice() для знаходження мінімальної ціни
  minPrice: function() {
    let min = Infinity; 
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        let price = parseInt(this[service]);
        if (!isNaN(price)) {
        min = Math.min(min, price);
        }
        }
      }
    return min;
  },
  

  // Додаємо метод maxPrice() для знаходження максимальної ціни
  maxPrice: function() {
    let max = -Infinity;
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        let price = parseInt(this[service]);
        if (!isNaN(price) && price > max) { // Перевірка на NaN і порівняння з поточним максимумом
          max = price;
        }
      }
    }
    return max;
  }
} 

// Додаю нову послугу
services['Макіяж'] = "1200 грн";

//Результат виводимо 
console.log("Загальна вартість послуг:", services.price(), "грн"); 
console.log("Мінімальна ціна послуги:", services.minPrice(), "грн");
console.log("Максимальна ціна послуги:", services.maxPrice(), "грн");