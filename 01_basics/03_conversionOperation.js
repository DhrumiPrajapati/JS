//<----------------------------conversions---------------------------->

//converting into numbers-------------->

let score = 33    //number
let score1 = "33" //string
console.log(typeof score);    //method1
console.log(typeof (score1));  //method2

let valueInNumber = Number(score1)   //converting string in number
console.log(typeof (valueInNumber)); //type=number
console.log(valueInNumber);          //print the number

//Issue--->
let score2 = Number("33abc")     //converting string+number in number
console.log(typeof (score2));    //type=number
console.log(score2);            //print NaN(Not a Number)

let score3 = Number(null)     //converting null in number
console.log(typeof (score3));    //type=number
console.log(score3);            //print 0

let score4 = Number(undefined)     //converting undefined in number
console.log(typeof (score4));    //type=number
console.log(score4);            //print NaN(Not a Number)

let score5 = Number(false)     //converting boolean in number
console.log(typeof (score5));    //type=number
console.log(score5);            //print 1 for true, 0 for false

// "33" -> 33
// "33abc" -> NaN (type of NaN is Number)
// "Dhrumi" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1, false -> 0

//converting into boolean-------------->

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof (booleanIsLoggedIn));    //type=boolean
console.log(booleanIsLoggedIn);            //print true

// 1 -> true, 0 -> false
// "" -> false
// "abc" -> true

//converting into string-------------->
let someNumber = 33
let stringNum = String(someNumber)
console.log(typeof (stringNum));    //type=string
console.log(stringNum);            //print 33

//<----------------------------operations---------------------------->
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);      //12
console.log(1 + "2");      //12
console.log("1" + "2");    //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2");  //32


//bad practice to write such code-------------->

console.log(3 + 4 * 5 % 3);      

console.log(true);   //true
console.log(+true);  //1
//console.log(true+);  //error
console.log(+"");    //0 

let num1, num2, num3
num1 = num2 = num3 = 2+2   //bad practice


//Prefix and Postfix---------->
// let gameCounter = 100
// a = ++gameCounter;      //prefix
// b = gameCounter++;      //postfix   
// console.log(a);     //101
// console.log(b);     //101

//easy example
let a = 3        //a=3
b = a++;         //b -> value before increment //a=4, b=3 
console.log("Post incr");
console.log(`a:${a}, b:${b}`);

let x = 3       //x=3
y = ++x;        //c -> value after increment  //x=4, y=4
console.log("Pre incr");
console.log(`x:${x}, y:${y}`);

//post incr -> first assign value, then incr value
//pre incr -> first incr value, then assign value