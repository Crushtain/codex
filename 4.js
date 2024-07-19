let array = [3, 5, -4, 8, 11, 1, -1, 6]

let targetSum = 8

let result = checkArray(array, targetSum)

console.log(result)
function checkArray(array, targetSum) {
    //создаем хеш-таблицу для записи чисел, который уже были отсмотрены в массиве
    let map = new Map()
    //Цикл for of для итерирования по array
    for (let num of array) {
        let difference = targetSum - num
        //Ищем полученную разницу в хеш-таблице.
        if (map.has(difference)) {
            return [num, difference]
        }
        //Записываем текущее значение. Используем null для экономии памяти.
        map.set(num, null)
    }
    //Если нужных чисел нет, возвращаем пустой массив
    return []
}