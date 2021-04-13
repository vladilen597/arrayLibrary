let arrayLibrary = {
    error: "Handling error. Check the inputs.",

    take: function(array, n) { // берет из входного массива элементы до n 
        if (array.length < n) {
            return this.error;
        } else {
            let arrayToReturn = [];
            for (let i = 0; i < n; i++) {
                arrayToReturn[i] = array[i];
            }
            return arrayToReturn;
        }
    },

    skip: function(array, n) { // Пропускает элементы до n
        if (array.length < n) {
            return this.error;
        } else {
            let arrayToReturn = [];
            let j = 0;
            for (let i = n; i < array.length; i++) {
                arrayToReturn[j] = array[i]
                j++;
            }
            return arrayToReturn;
        }
    },

    map: function(array, callback) {
        return callback = (num) => {
            for (let i = 0; i < array.length; i++) {
                array[i] *= num;
            }
            return array;
        };
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];
let n = 3;

console.log("Take: " + arrayLibrary.take(array, n));
console.log("Skip: " + arrayLibrary.skip(array, n));

let map = arrayLibrary.map(array);
console.log("Map: " + map(2));