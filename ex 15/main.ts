let guestList = ["Ajwa", "Eshal", "Azlan"];

let dontCome = guestList[0];

console.log(dontCome, "nh a skti");

guestList.splice(0, 1, "Ainy");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));