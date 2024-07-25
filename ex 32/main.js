// Array of current users
var current_users = ["Arooba", "danish", "Anita", "Osama", "Tayyaba"];
//  Array of new users
var new_users = ["Ainy", "Ayesha", "Danish", "Ajwa", "Anita"];
// Loop through new_users to check for usernzmes avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using If-Else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
