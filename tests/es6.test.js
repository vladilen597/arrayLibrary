const ArrayLibraryClass = require('../scripts/es6');

test('Array library ES6 take test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.take(array, 2)).toEqual([9, 7]);
});

test('Array library ES6 skip test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.skip(array, 3)).toEqual([3, 1]);
});

test('Array library ES6 map test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.map(array, a => { return a += 1 })).toEqual([10, 8, 6, 4, 2]);
});

test('Array library ES6 reduce test', () => {
    array = [9, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.reduce(array, (a, b) => { return a += b }, 10)).toBe(28);
});

test('Array library ES6 filter test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.filter(array, a => { return a < 5 })).toEqual([3, 1]);
});

test('Array library ES6 forEach test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.foreach(array, a => { return a -= 5 })).toEqual([4, 2, 0, -2, -4]);
});

test('Array library ES6 chain test', () => {
    array = [9, 7, 5, 3, 1];
    const arrayLib = new ArrayLibraryClass();
    expect(arrayLib.chain(array).take(3).skip(1).getValue()).toEqual([7, 5]);
});