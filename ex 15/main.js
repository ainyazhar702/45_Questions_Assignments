var guestList = ["Ajwa", "Eshal", "Azlan"];
var dontCome = guestList[0];
console.log(dontCome, "nh a skti");
guestList.splice(0, 1, "Ainy");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
