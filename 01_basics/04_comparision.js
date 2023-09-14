//Comparing same datatypes...gives answer in boolean -------->
console.log(2>1);
console.log(2 >=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//Issue in JS
console.log("2" > 1);   //true... js converts "2" into number datatype automatically
console.log("02" > 1);  //true

//same datatypes can be compared

//for clean code avoid comparing differnt data types ------>
console.log(null>0);  //F  connot get predictable ans, issue in conversion of datatype
console.log(null>=0); //T  null is converted into 0

console.log(null<0);  //F
console.log(null<=0); //T

console.log(null==0); //F
console.log(null!=0); //T

console.log(undefined == 0); //for undefined value will be false always
console.log(Number(undefined)); //NaN

//Strict check (===), it checks datatypes and values both -------->
console.log("2" === 2); //false, cuz datatype is different