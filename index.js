// 1
const celsius = 5;
const fahrenheit = (celsius * 9/5) + 32;
console.log("Температура за Цельсієм: " + celsius + "°C");
console.log("Температура за Фаренгейтом: " + fahrenheit + "°F");

// 2
const monthDays = 30;
const monthHours = monthDays * 24;
const monthMinutes = monthHours * 60;
console.log("Кількість годин у місяці: " + monthHours);
console.log("Кількість хвилин у місяці: " + monthMinutes);

// 3
let healthBefore = 100;
let energyBefore = 100;
let helthAfter = healthBefore - 35;
let energyAfter = energyBefore - 68;
console.log("Теперешнє здоров'я гравця: " + helthAfter);
console.log("Теперішня енергія гравця: " + energyAfter);

// 4
let purchaseAmount = 1049;
let sale = purchaseAmount * 0.10;
let saleAmount = purchaseAmount - sale;
console.log("Звичайна вартість покупки: " + purchaseAmount);
console.log("Вартість покупки зі знижкою 10%: " + saleAmount);

// 5
let floatingNumber = 69.64;
let roundedNumber = Math.floor(floatingNumber);
console.log("Число з плаваючою комою: " + floatingNumber);
console.log("Округлене число: " + roundedNumber);

// 6
let numberString = "55.74839";
let decimalNumber = parseFloat(numberString);
console.log("Рядок з числом з плаваючою комою: " + numberString);
console.log("Перетворене десяткове число: " + decimalNumber);


// 7
let nubmerString2 = "77"
let integerNumber = parseInt(nubmerString2);
console.log("Рядок з цілим числом: " + nubmerString2);
console.log("Перетворене ціле число: " + integerNumber);

// 8
let randomNumber = 64;
let sqrtNumber = Math.sqrt(randomNumber);
console.log("Рядок з цілим числом: " + randomNumber)
console.log("Рядок з добутим квадратним коренем з цього числа: " + sqrtNumber)

// 9
let number = 108;
let stringNumber = "109";
let parsedNumber = parseInt(stringNumber);
console.log("Рядок з цілим числом: " + stringNumber);
console.log("Перетворене ціле число: " + parsedNumber);
let numberAsString = toString(number);
console.log("Ціле число: " + number);
console.log("Число у вигляді рядка: " + numberAsString);