// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will moddify array 
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define ana rray of magicians names
let magician_names = ["Harry poter", "Ubaid", "Rahim"]

// making a copy of orignal aarray through .slice() function
let copy_magician_names = magician_names .slice()

// modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both arrays orignal and copied

// orignal log
console.log("Orignal Array\n")
show_magicians(magician_names);

// copied
show_magicians(copy_great_magicians);
