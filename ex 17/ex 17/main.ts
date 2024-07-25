// creating a Guest List Array
let guestList = ["Ajwa", "Eshal", "Azlan"];

// Making Variable for those who cant come
let dontCome = guestList[0];

// print the name of Guest who cant come
console.log(dontCome, "nh a skti");

// Add or Remove values from Guest List Array
guestList.splice(0, 1, "Ainy");

// Messasge Print Bigger Table
console.log("Good News ! We have Found a Bigger Table For a Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Azhar");

// Adding a new guest at ending index of array
guestList.push("Ali");

// get a middle index of our guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array 
guestList .splice(middleIndex, 0, "Rohan");

// Print Message of Updated List
console.log("Update List of our Guest");

// sending a Invitation mesage to our guest one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));

// Inform that only two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

//Using While-loop to remove guest from the array until only two names remain 
while(guestList.length > 2 ) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to diner`);
}


// sending a invitations to the last two guest on the list
console.log("invitataions to the last 2 guesst");

guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));


// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);