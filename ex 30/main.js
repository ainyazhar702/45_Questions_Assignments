// creating a array
var userNames = ["Ali", "Azlan", "Azhar", "Admin", "Ajwa"];
// using ForEach loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
