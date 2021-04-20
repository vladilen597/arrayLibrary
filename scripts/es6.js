class ArrayLibrary {
    constructor(array) {
        this.array = array;
        this.error = `Handling error. Check the inputs. Maybe you're out of array`;
        self = this;
    }

    chain(array) {
        return new ChainArrayLibrary(array);
    }



    take(array, n) { // Берет из входного массива элементы до n 
        let arrayToReturn = [];
        if (array.length < n) {
            return this.error;
        }

        for (let i = 0; i < n; i++) {
            arrayToReturn[i] = array[i];
        }
        this.array = arrayToReturn;
        return this.array;
    };

    skip(array, n) { // Пропускает элементы до n
        let arrayToReturn = [];
        if (array.length < n) {
            return this.error;
        }

        let j = 0;
        for (let i = n; i < array.length; i++) {
            arrayToReturn[j] = array[i];
            j++;
        }
        this.array = arrayToReturn;
        return this.array;
    };

    map(array, callback) { // Обработка массива введенной функцией
        let arrayToReturn = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            arrayToReturn.push(response);
        }
        this.array = arrayToReturn;
        return this.array;
    };

    reduce(array, callback, initialValue = 0) {
        let total = initialValue;

        if (initialValue == 0) {
            total = array.shift();
        }

        for (let i = 0; i < array.length; i++) {
            total = callback(total, array[i]);
        }
        this.array = total;
        return this.array;
    };

    filter(array, callback) { // Возвращает новый массив из указанного условия
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            let response = callback(array[i], i, array);
            if (response == true) {
                newArray.push(array[i]);
            }
        }
        this.array = newArray;
        return this.array;
    };

    foreach(array, callback) {
        let response = [];

        for (let i = 0; i < array.length; i++) {
            response[i] = callback(array[i], i, array);
        }
        this.array = response;
        return this.array;
    };
}


class ChainArrayLibrary {
    constructor(array) {
        this.array = array;
        this.classLink = new ArrayLibrary;
    }
    take(n) {
        this.array = this.classLink.take(this.array, n);
        return this;
    }

    skip(n) {
        this.array = this.classLink.skip(this.array, n);
        return this;
    }

    map(callback) {
        this.array = this.classLink.map(this.array, callback);
        return this;
    }

    reduce(callback, initialValue = 0) {
        this.array = this.classLink.reduce(this.array, callback, initialValue);
        return this;
    }

    filter(callback) {
        this.array = this.classLink.filter(this.array, callback);
        return this;
    }

    foreach(callback) {
        this.array = this.classLink.filter(this.array, callback);
        return this;
    }

    getValue() {
        console.log(this.array);
        return this.array;
    }
}

// let arr = [1, 3, 5, 7, 9];
// const libInstance = new ArrayLibrary;

// libInstance.chain(arr).take(4).map(a => { return a += 10 }).getValue();

module.exports = ArrayLibrary;