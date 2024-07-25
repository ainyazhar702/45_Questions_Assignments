// Define a function with a rest parameter that accept items arguments representing our sandwich 
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich the following items: \n");

    items.forEach(singelItem => console.log(singelItem));
    
     console.log("\nNow Enjoy Sandwich");
}

// call the function 3 items with 3 different number of arguments
makeSandwich("Chiken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Tomato", "Onion", "Chiken", "Cheese", "Egg", "Butter", "Cucumber");
