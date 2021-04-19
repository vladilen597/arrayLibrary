let arrayLibrary = function() {
    let error = "Handling error. Check the inputs. Maybe you're out of array";
    let arrayToReturn = [];
    let arrayFunction = [];
    let num;

    function chain(array) {
        arrayFunction = array;

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
            reduce: reduce,
            filter: filter,
            map: map,
            foreach: foreach,
            getValue: getValue
        }
    };

    // function take(n) { // Берет из входного массива элементы до n 
    //     if (arrayFunction.length < n) {
    //         throw error;
    //     }

    //     for (let i = 0; i < n; i++) {
    //         arrayToReturn[i] = arrayFunction[i];
    //     }
    //     arrayFunction = arrayToReturn;
    //     console.log(arrayFunction);
    //     return arrayFunction;
    // };

    function take(array, n) { // Берет из входного массива элементы до n 
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

// const lib = arrayLibrary();
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(lib.foreach(arr, (a) => { return a += 10 }));
module.exports = arrayLibrary;