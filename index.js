while (true) {
const numberToGuess = Math.floor(Math.random()*1000);

console.log(`Я загадал число: ${numberToGuess}`);

const numberFromUser = +prompt('Введите число от 0 до 999:');

console.log(`Вы ввели: ${numberFromUser}`);


if (isNaN(numberFromUser)) {
    alert ('Вы ввели не число!');

} else if(numberFromUser === numberToGuess) {
    alert ('Вы угадали!');

} else if(numberFromUser < 0 || numberFromUser > 999) {
    alert ('Вы ввели число вне диапозона от 0 до 999! Попробуйте снова!');

} else if(numberFromUser > numberToGuess && numberFromUser < 1000) {
    alert ('Ваше число больше!');

} else {
    alert ('Ваше число меньше!!');
}
}