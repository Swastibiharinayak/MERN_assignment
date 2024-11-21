const accountID = 170
let accountEmail = "swasti@gmail.com"
var accountPassword = "123456"
accountCity = "Bhubaneswar" // js supports variables without any declaration of "var" or "let"
let accountState; // Value not added so it will show "undifined"

// accountID = 1 // const can't change

console.log(accountID)

accountEmail = "swasti@yahoo.com"
accountPassword = "654321"
accountCity = "Cuttack"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity])