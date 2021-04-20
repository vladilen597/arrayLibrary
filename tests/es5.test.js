const arrayLibrary = require('../scripts/es5');

test('Array library ES5 take test', () => {
    array = [1, 3, 5, 7, 9];
    const arrayLib = arrayLibrary();
    expect(arrayLib.take(array, 2)).toEqual([1, 3]);
});

test('Array library ES5 skip test', () => {
    array = [1, 3, 5, 7, 9];
    let arrayLib = arrayLibrary();
    expect(arrayLib.skip(array, 3)).toEqual([7, 9]);
});

test('Array library ES5 map test', () => {
    array = [1, 3, 5, 7, 9];
    let arrayLib = arrayLibrary();
    expect(arrayLib.map(array, a => { return a += 1 })).toEqual([2, 4, 6, 8, 10]);
});

test('Array library ES5 reduce test', () => {
    array = [1, 3, 5, 7, 9];
    let arrayLib = arrayLibrary();
    expect(arrayLib.reduce(array, (a, b) => { return a += b })).toBe(25);
});

test('Array library ES5 filter test', () => {
    array = [1, 3, 5, 7, 9];
    let arrayLib = arrayLibrary();
    expect(arrayLib.filter(array, a => { return a < 5 })).toEqual([1, 3]);
});

test('Array library ES5 forEach test', () => {
    array = [1, 3, 5, 7, 9];
    let arrayLib = arrayLibrary();
    expect(arrayLib.foreach(array, a => { return a += 5 })).toEqual([6, 8, 10, 12, 14]);
});

test('Array library ES5 chain take skip test', () => {
    array = [1, 3, 5, 7, 9, 11, 13, 15];
    let arrayLib = arrayLibrary();
    expect(arrayLib.chain(array).take(5).skip(2).map(a => { return a += 10 }).getValue()).toEqual([15, 17, 19]);
});