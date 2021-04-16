let arrayLibrary = function() {
    let error = "Handling error. Check the inputs. Maybe you're out of array";
    let arrayToReturn = [];
    let arrayFunction = [];

    function chain(array) {
        arrayFunction = array;
        return this;
    }

    function take(n) { // Берет из входного массива элементы до n 
        if (arrayFunction.length < n) {
            throw error;
        }

        for (let i = 0; i < n; i++) {
            arrayToReturn[i] = arrayFunction[i];
        }
        arrayFunction = arrayToReturn;
        return this;
    };

    function skip(n) { // Пропускает элементы до n
        if (arrayFunction.length < n) {
            throw error;
        }
        let arrayToReturn = [];

        let j = 0;
        for (let i = n; i < arrayFunction.length; i++) {
            arrayToReturn[j] = arrayFunction[i];
            j++;
        }
        arrayFunction = arrayToReturn;
        return this;
    };

    function map(callback) { // Обработка массива введенной функцией

        let arrayToReturn = [];

        for (let i = 0; i < arrayFunction.length; i++) {
            let response = callback(arrayFunction[i], i, arrayFunction);
            arrayToReturn.push(response);
        }
        arrayFunction = arrayToReturn;
        return this;
    };

    function reduce(callback, initialValue = 0) {

        let total = initialValue;

        if (initialValue == 0) {
            total = arrayFunction.shift();
        }

        for (let i = 0; i < arrayFunction.length; i++) {
            total = callback(total, arrayFunction[i]);
        }
        arrayFunction = total;
        return this;
    };

    function filter(callback) { // Возвращает новый массив из указанного условия
        let newArray = [];

        for (let i = 0; i < arrayFunction.length; i++) {
            let response = callback(arrayFunction[i], i, arrayFunction);
            if (response == true) {
                newArray.push(arrayFunction[i]);
            }
        }
        arrayFunction = newArray;
        return this;
    };

    function foreach(callback) {
        let response = [];
        for (let i = 0; i < arrayFunction.length; i++) {
            response[i] = callback(arrayFunction[i], i, arrayFunction);
        }
        arrayFunction = response;
        return this;
    };

    function getValue() {
        console.log(arrayFunction);
        return arrayFunction;
    }

    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain,
        getValue: getValue
    }

}

// let array1 = [1, 3, 5, 7, 9];
// let arrayLib = new arrayLibrary();
// arrayLib.chain(array1).foreach(a => { return a += 5 }).getValue();

module.exports = arrayLibrary;