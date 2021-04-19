const arrayLibrary = require('../scripts/es5');
const ArrayLibraryClass = require('../scripts/es6');

// ES5 TESTS //

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
    expect(arrayLib.chain(array).take(5).skip(2).getValue()).toEqual([5, 7, 9]);
});

// ES5 TESTS END //

// ES6 TESTS //

test('Array library ES6 chain take test', () => {
    array = [9, 7, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).take(2).getValue()).toEqual([9, 7]);
});

test('Array library ES6 chain skip test', () => {
    array = [9, 7, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).skip(3).getValue()).toEqual([3, 1]);
});

test('Array library ES6 chain map test', () => {
    array = [9, 7, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).map(a => { return a += 1 }).getValue()).toEqual([10, 8, 6, 4, 2]);
});

test('Array library ES6 chain reduce test', () => {
    array = [9, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).reduce((a, b) => { return a += b }).getValue()).toBe(18);
});

test('Array library ES6 chain filter test', () => {
    array = [9, 7, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).filter(a => { return a < 5 }).getValue()).toEqual([3, 1]);
});

test('Array library ES6 chain forEach test', () => {
    array = [9, 7, 5, 3, 1];
    let arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).foreach(a => { return a += 5 }).getValue()).toEqual([14, 12, 10, 8, 6]);
});

// ES6 TESTS END //