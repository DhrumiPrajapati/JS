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

//<------------- Memory ------------->

//Stack memory (Primitive) ---> take copy of the value and changes are done in the copy
//Heap memory (Non-Primitive) --->take reference value and changes are done in the original value

//example of stack
let myName = "Dhrumi"
let anotherName = myName //assigning value of myName to anotherName
anotherName = "Dhru" //Changing value of anotherName
console.log(myName); //Dhrumi
console.log(anotherName); //Dhru


//example of heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne //assigning value of userOne to userTwo

userTwo.email = "dhrumi@google.com" //chaning value of email for userTwo

console.log(userOne.email); //dhrumi@google.com
console.log(userTwo.email); //dhrumi@google.com