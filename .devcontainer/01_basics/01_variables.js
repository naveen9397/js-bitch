const accountId = 144553
let accountEmail = "naveen.sr2469@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 //not allowed
accountEmail = "hellobitch@gmail.com"
accountPassword = "141414141"
accountCity = "delhi"
let accountState;

/*
prefer not to use var
because of issue in block scope and funtional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])