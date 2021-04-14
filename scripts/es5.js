let arrayLibrary = {
    error: "Handling error. Check the inputs.",
    arrayToReturn: [],


    chain(array) {
        return {
            error: "Handling error. Check the inputs.",
            arrayToReturn: [],

            take(num) {
                this.arrayToReturn = array;
                if (this.arrayToReturn.length < num) {
                    return this.error;
                }

                for (let i = 0; i < num; i++) {
                    this.arrayToReturn[i] = array[i];
                }
                return this;
            },

            skip(num) {
                if (this.arrayToReturn.length < num) {
                    return this.error;
                }

                let j = 0;
                for (let i = num; i < this.arrayToReturn.length; i++) {
                    this.arrayToReturn[j] = array[i];
                    j++;
                }
                return this;
            },

            getValue() {
                return this;
            }
        }
    },

    take(array, n) { // Берет из входного массива элементы до n 
        if (array.length < n) {
            return this.error;
        }

        for (let i = 0; i < n; i++) {
            this.arrayToReturn[i] = array[i];
        }
        return this.arrayToReturn;
    },

    skip: function(array, n) { // Пропускает элементы до n
        this.arrayToReturn = [];
        if (array.length < n) {
            return this.error;
        }

        let j = 0;
        for (let i = n; i < array.length; i++) {
            this.arrayToReturn[j] = array[i]
            j++;
        }
        return this.arrayToReturn;
    },

    map: function(array, callback) { // Обработка массива введенной функцией
        let arrayToReturn = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            arrayToReturn.push(response);
        }
        return arrayToReturn;
    },

    reduce: function(array, callback, initialValue = 0) {
        let total = initialValue;

        if (initialValue == 0) {
            total = array.shift();
        }


        for (let i = 0; i < array.length; i++) {
            total = callback(total, array[i]);
        }
        return total;
    },

    filter: function(array, callback) { // Возвращает новый массив из указанного условия
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            if (response == true) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    },

    foreach: function(array, callback) {
        let response;
        for (let i = 0; i < array.length; i++) {
            response = callback(array[i], i, array);
        }
        return response;
    },
}



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;

console.log("Take: " + arrayLibrary.take(array, n));
console.log("Skip: " + arrayLibrary.skip(array, n));


console.log("Map: " + arrayLibrary.map(array, (a) => { return a * 2 }));

console.log("Reduce: " + arrayLibrary.reduce(array, (a, b) => { return (a += b) }, 5));

console.log("Filter: " + arrayLibrary.filter(array, (a) => { return a > 3 }));

console.log("");

arrayLibrary.foreach(array, (a) => { console.log(`Я - число ${a} из foreach плюс 10 = ` + (a + 10)); });
console.log(arrayLibrary.chain(array).take(4).getValue());