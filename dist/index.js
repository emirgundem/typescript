"use strict";
//Basic Types
let id = 5;
let company = "test";
let isPublished = true;
let x = 'Hello';
let age = 25;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
//Tuple
let person = [1, 'emir', true];
//Tuple Array
let employee;
employee = [
    [1, 'ABC'],
    [2, 'BCA'],
    [3, 'CEF']
];
//Union
let pid;
pid = 2;
pid = "2";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'john'
};
