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

// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

// call show_magicians that show modifyed list of magicians
show_magicians(great_magicians)