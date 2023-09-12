const accountId = 144553 //for constant
let accountEmail = "dhrumi@gmail.com" //for var 
var accountPassword = "123456" //for var - don't use
accountCity = "Vadodara" //for var - shouldn't use
let accountState;

// accountId = 2 //not allowed

accountEmail = "abc@gc.com"
accountPassword = "7634984"
accountCity = "Ahemdabad"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*
Prefer not to use var to declare variables
because of issue in block scope and functional scope.
*/