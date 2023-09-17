const name = "Dhrumi"
const repoCount = 50

//console.log(name + repoCount + " Value"); //not use this syntax, bad practice

//use backticks(``)
// console.log(`Hello, it is me... ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dhrumi')
// console.log(gameName);                 //gives diff output in console(browser)
// console.log(gameName[0]);
// console.log(gameName.__proto__);      //{}-> object
// console.log(gameName.length);
// console.log(gameName.toUpperCase());  //doesn't chamge the original value
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(1,4)
console.log(newString);   //hru-> last value(4=m) does not count

const anotherStr = gameName.slice(-5,3) //u can give negative values also for reverse values
console.log(anotherStr); //hr