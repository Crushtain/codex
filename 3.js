
let number = 1;

let result = isSquare(number)

//Ответ
if (result !== 0) {
    console.log(`${number} - является квадратом \r\n${result} - корень`)
} else {
    console.log(`${number}  - не является квадратом`)
}
//Функция проверки, является ли число квадратом
function isSquare(num) {
    //Цикл for для нахождения числа.
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            //Возвращаем положительный ответ и корень num
            return i
        }
    }
    //Если произведение i становится больше num, то num не является квадратом
    return 0
}

