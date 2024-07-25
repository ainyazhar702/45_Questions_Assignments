// creating a array
let userNames = ["Ali", "Azlan", "Azhar", "Admin", "Ajwa"];

// using ForEach loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
  }else{
    console.log(`Hello ${oneUser}, thankyou for logging in again.`)
  }
})