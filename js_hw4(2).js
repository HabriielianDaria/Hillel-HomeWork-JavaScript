function checkProbabilityTheory(count) {
    let evenCount = 0;  // Для парних чисел
    let oddCount = 0;   // Для непарних чисел
    let randomNumbers = []; 

    // Кількість згенерованних та кількість парних і непарних чисел
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1001 - 100) + 100); 
        randomNumbers.push(randomNumber);
        if (randomNumber % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++;
        }
    }

    // Відсоток парних до не парних, округлюємо до 2 знаків після коми:
    let evenPercentage = (evenCount / count * 100).toFixed(2);
    let oddPercentage = (oddCount / count * 100).toFixed(2);  

    // Виведення результатів
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(randomNumbers.join(", "));
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage}%`);
}

// Викликаємо функцію для генерування 15 випадкових чисел 
checkProbabilityTheory(15);


