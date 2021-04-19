let arrayLibrary = function() {
    let error = "Handling error. Check the inputs. Maybe you're out of array";
    let arrayToReturn = [];
    let arrayFunction = [];
    let chainArray = [];
    let num;

    function chain(array) {
        let arrResult = array;
        return {
            take: function(n) {
                chainArray.push(take(arrResult, n));
                return this;
            },
            skip: function(n) {
                chainArray.push(skip(arrResult, n));
                return this;
            },
            getValue: function() {
                console.log(chainArray);
            }
        };
    };

    function take(array, n) { // Берет из входного массива элементы до n
        arrayFunction = array;
        if (array.length < n) {
            throw error;
        }
        for (let i = 0; i < n; i++) {
            arrayToReturn[i] = array[i];
        }
        array = arrayToReturn;
        return array;
    };

    function skip(array, n) { // Пропускает элементы до n
        let arrayToReturn = [];
        if (array.length < n) {
            throw error;
        }

        let j = 0;
        for (let i = n; i < array.length; i++) {
            arrayToReturn[j] = array[i];
            j++;
        }
        array = arrayToReturn;
        return array;
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
        arrayFunction = array;
        let newArray = [];

        for (let i = 0; i < arrayFunction.length; i++) {
            let response = callback(arrayFunction[i], i, arrayFunction);
            if (response == true) {
                newArray.push(arrayFunction[i]);
            }
        }
        arrayFunction = newArray;
        return arrayFunction;
    };

    function foreach(array, callback) {
        let response = [];
        for (let i = 0; i < array.length; i++) {
            response[i] = callback(array[i], i, array);
        }
        array = response;
        return array;
    };

    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain,
    }
}

const lib = arrayLibrary();
let arr = [1, 2, 3, 4, 5, 6, 7];
lib.chain(arr).take(3).skip(1).getValue();