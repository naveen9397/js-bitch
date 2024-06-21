// preitive

// 7 types : string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumbe = 75325852357533337978384785n



// Reference (Non premetive)

// Array, Object, Functions 

const heros = ["shaktiman", "naagraj", "doga" ]
let myObj = {
    name: "NAVEENBAKCHOD",
    age: 19,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof BigInt);
