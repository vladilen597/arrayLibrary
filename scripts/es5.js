function arrayLibrary() {
    let error = "Handling error. Check the inputs.";
    let arrayToReturn = [];


    function take(array, n) { // Берет из входного массива элементы до n 
        if (array.length < n) {
            return error;
        }

        for (let i = 0; i < n; i++) {
            arrayToReturn[i] = array[i];
        }
        return arrayToReturn;
    };

    function skip(array, n) { // Пропускает элементы до n
        arrayToReturn = [];
        if (array.length < n) {
            return error;
        }

        let j = 0;
        for (let i = n; i < array.length; i++) {
            arrayToReturn[j] = array[i]
            j++;
        }
        return arrayToReturn;
    };

    function map(array, callback) { // Обработка массива введенной функцией
        let arrayToReturn = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            arrayToReturn.push(response);
        }
        return arrayToReturn;
    };

    function reduce(array, callback, initialValue = 0) {
        let total = initialValue;

        if (initialValue == 0) {
            total = array.shift();
        }

        for (let i = 0; i < array.length; i++) {
            total = callback(total, array[i]);
        }
        return total;
    };

    function filter(array, callback) { // Возвращает новый массив из указанного условия
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            if (response == true) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    };

    function foreach(array, callback) {
        let response;

        for (let i = 0; i < array.length; i++) {
            response = callback(array[i], i, array);
        }
        return response;
    };

    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach
    }
}

// console.log("Take: " + arrayLibrary.take(array, n));
// console.log("Skip: " + arrayLibrary.skip(array, n));
// console.log("Map: " + arrayLibrary.map(array, (a) => { return a * 2 }));
// console.log("Reduce: " + arrayLibrary.reduce(array, (a, b) => { return (a += b) }, 5));
// console.log("Filter: " + arrayLibrary.filter(array, (a) => { return a > 3 }));
// arrayLibrary.foreach(array, (a) => { console.log(`Я - число ${a} из foreach плюс 10 = ` + (a + 10)); });



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;

let arrayLib = new arrayLibrary();

arrayLib.reduce(array, (a, b) => { return console.log(a += b) });