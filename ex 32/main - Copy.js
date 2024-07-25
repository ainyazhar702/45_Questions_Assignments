// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will moddify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define ana rray of magicians names
var magician_names = ["Harry poter", "Ubaid", "Rahim"];
// making a copy of orignal aarray through .slice() function
var copy_magician_names = magician_names.slice();
// modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays orignal and copied
// orignal log
console.log("Orignal Array\n");
show_magicians(magician_names);
// copied
show_magicians(copy_great_magicians);
