// Данная функция реализует сортировку массива.
// Интересная реализация алгоритма. Вероятно, при сильно загруженном процессоре eventLoop может повести себя
// не так, как надо и некоторые таймауты будут выполнены быстрее/медленнее. Также, если будет массив с очень
// большими числами алгоритм будет работать долго.

function func(arr, call_back) {

    //оборачиваем всю логику в объект Promise
    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr) || arr.some(it => parseInt(it) !== it || it < 0)) {
            //в случае ошибки возвращаем ее в catch с помощью reject.
            reject("Неверный формат входящих данных, должен быть массив положительных чисел")            //call_back(null, "Неверный формат входящих данных, должен быть массив положительных чисел");
            call_back(null);

        }  else {
            let res = [];

            const f = (val) => {
                res.push(val);
                if(res.length === arr.length)
                    call_back(res);
            }

            for(let i = 0; i < arr.length; i++) {
                setTimeout(f, arr[i], arr[i]);
            }

        }

        }
    )

    //проверка формата входящих данных

}
//функция для проверки работы колбека
function result(arr) {
    console.log(`result: ${arr}`)
}
//объявление новой функции для использования await
async function asyncFunc(arr) {
    try {
        await func(arr, result)
    } catch (error) {
        console.error(error)
    }
}
