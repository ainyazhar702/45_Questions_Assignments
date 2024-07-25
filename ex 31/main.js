var userNames = ["Ali", "Azlan", "Azhar", "Admin", "Ajwa"];
userNames = [];
if (userNames.length == 0) {
    console.log("Your array in empty we need to find some users!");
}
else {
    // using ForEach loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
        }
    });
}
