class ArrayLibraryClass {
    constructor() {}

    chain(array) {
        this.array = array;

        return {};
    }

    take(n) { // Берет из входного массива элементы до n 
        let arrayToReturn = [];
        if (this.array.length < n) {
            return this.error;
        }

        for (let i = 0; i < n; i++) {
            arrayToReturn[i] = this.array[i];
        }
        this.array = arrayToReturn;
        return this;
    };

    skip(n) { // Пропускает элементы до n
        let arrayToReturn = [];
        if (this.array.length < n) {
            return this.error;
        }

        let j = 0;
        for (let i = n; i < this.array.length; i++) {
            arrayToReturn[j] = this.array[i];
            j++;
        }
        this.array = arrayToReturn;
        return this;
    };

    map(callback) { // Обработка массива введенной функцией
        let arrayToReturn = [];

        for (let i = 0; i < this.array.length; i++) {
            let response = callback(this.array[i], i, this.array);
            arrayToReturn.push(response);
        }
        this.array = arrayToReturn;
        return this;
    };

    reduce(callback, initialValue = 0) {
        let total = initialValue;

        if (initialValue == 0) {
            total = this.array.shift();
        }

        for (let i = 0; i < this.array.length; i++) {
            total = callback(total, this.array[i]);
        }
        this.array = total;
        return this;
    };

    filter(callback) { // Возвращает новый массив из указанного условия
        let newArray = [];

        for (let i = 0; i < this.array.length; i++) {
            let response = callback(this.array[i], i, this.array);
            if (response == true) {
                newArray.push(this.array[i]);
            }
        }
        this.array = newArray;
        return this;
    };

    foreach(callback) {
        let response = [];

        for (let i = 0; i < this.array.length; i++) {
            response[i] = callback(this.array[i], i, this.array);
        }
        this.array = response;
        return this;
    };

    getValue() {
        console.log(this.array);
        return this.array;
    }
}

// module.exports = ArrayLibraryClass;