//5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про 
// статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
// Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

let isAdult = prompt('Скільки вам років?');

if (isAdult >= 18) {
    alert('Ви досягли повнолітнього віку');
} else {
    alert('Ви ще надто молоді');
}
