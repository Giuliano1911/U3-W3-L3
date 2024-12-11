console.log('number, string, boolean, any, null, undefined');
var myName = 'Giuliano';
var myAge = 25;
var studyingTS = true;
var greet = function (name) {
    return 'Ciao ' + name;
};
console.log(greet(myName));
var sum = function (a, b) { return a + b; };
console.log(sum(2, 4));
var addIva = function (a) { return a * 1.22; };
console.log(addIva(10));
var addStrings = function (s1, s2) { return (s1 + s2).length; };
console.log(addStrings('ciao', 'frank'));
var union;
var e8;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var tuple1 = [
    'ss',
    'ss',
    'ss',
    1,
    4,
];
var person1 = {
    firstName: 'Franco',
    lastName: 'Pippo',
    age: 65,
};
var arr3 = [person1];
console.log(arr3);
var duetto = {
    nRuote: 4,
    topSpeed: 190,
    turbina: false,
};
