const arrayLibrary = require('../scripts/es5');

test('Array library chain take test', (array1) => {
    array1 = [1, 3, 5, 7];
    arrayCopy = new arrayLibrary;
    expect(arrayCopy.chain(array1).take(2).getValue()).toBe([1, 3]);
});