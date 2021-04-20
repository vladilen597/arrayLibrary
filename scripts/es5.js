let arrayLibrary = function() {
    let error = `Handling error. Check the inputs. Maybe you're out of array`;

    function chain(array) {
        return {
            take: function(n) {
                array = take(array, n);
                return this;
            },
            skip: function(n) {
                array = skip(array, n);
                return this;
            },
            map: function(callback) {
                array = map(array, callback);
                return this;
            },
            reduce: function(callback, initialValue = 0) {
                array = reduce(array, callback, initialValue);
                return this;
            },
            filter: function(callback) {
                array = filter(array, callback);
                return this;
            },
            foreach: function(callback) {
                array = foreach(array, callback);
                return this;
            },
            getValue: function() {
                console.log(array);
                return array;
            }
        };
    };

    function take(array, n) { // Берет из входного массива элементы до n
        let arrayResult = [];
        if (array.length < n) {
            throw error;
        }
        for (let i = 0; i < n; i++) {
            arrayResult[i] = array[i];
        }
        array = arrayResult;
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
        let arrayResult = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            arrayResult.push(response);
        }
        return arrayResult;
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
        let arrayResult = array;
        let newArray = [];

        for (let i = 0; i < arrayResult.length; i++) {
            let response = callback(arrayResult[i], i, arrayResult);
            if (response == true) {
                newArray.push(arrayResult[i]);
            }
        }
        arrayResult = newArray;
        return arrayResult;
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

module.exports = arrayLibrary;