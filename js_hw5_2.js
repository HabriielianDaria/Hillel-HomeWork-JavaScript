var services = {
  "стрижка": "60.566 грн",
  "гоління": "80.53 грн",
  "Миття голови": "100 грн",

  // Створюю метод price() для обчислення загальної вартості
  price: function() {
    let total = 0;
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        total += parseFloat(this[service]); //щоб отримати тільки ціле число від ціни  
      }
    }
    return parseFloat(total.toFixed(2));
  },

  // Створюю метод minPrice() для знаходження мінімальної ціни
  minPrice: function() {
    let min = Infinity; 
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        let price = parseFloat(this[service]);
        if (!isNaN(price)) {
        min = Math.min(min, price);
        }
        }
      }
      return parseFloat(min.toFixed(2));
  },
  

  // Додаємо метод maxPrice() для знаходження максимальної ціни
  maxPrice: function() {
    let max = -Infinity;
    for (let service in this) {
      if (typeof this[service] === 'string' && this[service].includes('грн')) {
        let price = parseFloat(this[service]);
        if (!isNaN(price) && price > max) { // Перевірка на NaN і порівняння з поточним максимумом
          max = price;
        }
      }
    }
    return parseFloat(max.toFixed(2));
  }
} 

// Додаю нову послугу
services['Макіяж'] = "1200.99 грн";

//Результат виводимо 
console.log("Загальна вартість послуг:", services.price(), "грн"); 
console.log("Мінімальна ціна послуги:", services.minPrice(), "грн");
console.log("Максимальна ціна послуги:", services.maxPrice(), "грн");