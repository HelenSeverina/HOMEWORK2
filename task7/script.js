// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
// Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

let date = new Date();
let hours = date.getHours();
console.log(date);
console.log(hours);

//1)
if (hours >= 23 && hours <= 5) {
    alert('Доброї ночі');
} else if (hours > 5 && hours < 11) {
    alert('Доброго ранку');
} else if (hours >= 11 && hours <= 17) {
    alert('Доброго дня');
} else if (hours > 17 && hours < 23) {
    alert('Доброго вечора');
}

//2)
switch(true) {
    case hours >= 23 && hours <= 5:
        alert('Доброї ночі');
    break;
    case hours > 5 && hours < 11:
        alert('Доброго ранку')
    break;
    case hours >= 11 && hours <= 17:
        alert('Доброго дня');
    break;
    case hours > 17 && hours < 23:
        alert('Доброго вечора');
    break;
};