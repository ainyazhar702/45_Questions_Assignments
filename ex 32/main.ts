// Array of current users
let current_users = ["Arooba", "danish", "Anita", "Osama", "Tayyaba"]

//  Array of new users
let new_users = ["Ainy", "Ayesha", "Danish", "Ajwa", "Anita"]

// Loop through new_users to check for usernzmes avaibility

new_users.forEach(new_one_user => {
// Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

  // Print different messages using If-Else statement
    if (our_condition){
          console.log(`Sorry ${new_one_user} is already taken`)        
}else{
     console.log(`This username ${new_one_user} is available`)
    }
})