// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// Результат:
// "Rome*Lviv*Warsaw"

let cities = ["Rome", "Lviv", "Warsaw"];

let newString = cities.join('*');
console.log(newString);