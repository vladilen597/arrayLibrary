class ArrayLibrary {
    constructor(array) {
        this.array = array;
        this.error = "Handling error. Check the inputs.";
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
        return this;
    };

    foreach(callback) {
        let response;

        for (let i = 0; i < this.array.length; i++) {
            response = callback(this.array[i], i, this.array);
        }
        return this;
    };

    chain() {
        return this;
    }

    getValue() {
        console.log(this.array);
    }
}

let arrayClass = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let arrLib = new ArrayLibrary(arrayClass);


arrLib.chain().take(6).skip(2).map(a => { a += 1 }).getValue();