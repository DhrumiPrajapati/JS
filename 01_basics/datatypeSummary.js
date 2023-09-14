// Primitive Datatypes (Call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Non Primitive Datatypes (call by reference/memory)
//Array, Objects, Functions

//2 types of languages: 
//Statically typed -> perform datatype checking at compile time
//Dinamically typed -> perform datatype checking at run time

//JS is Dinamically typed language ->
//data types of variables are determined by the value they hold at runtime 
//and can change throughout the program as we assign different values to them
//no need to define datatype in the code

//Primitives ------------>
//Symbol defined everything uniquically
const id = Symbol('123')
const anotherid = Symbol('123')
//Hence we get different ans for both the statements

console.log(id === anotherid); //false

const bigNumber = 654644544544454n //bigInt ... put 'n' at the end

//Non-Primitives ------------>
const heros = ["Spiderman", "Batman", "Pikachu"]

let myObject = {
    name: "Dhrumi",
    age: 22,
}

//function can be also used as a variable in JS...example ->
const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof heros);     //object
console.log(typeof myObject);  //object
console.log(typeof myFunction); //object function

//Typeof operator value ------->
//Undefined -> Undefined
//Null -> Object
//Boolean -> Boolean
//Number -> Number
//String -> String