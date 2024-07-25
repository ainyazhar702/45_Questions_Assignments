// Making a array of countries and print its orignal order
let CountriesToVisit: string[] = ["Denmark", "Canada", "Brazil", "America"];
console.log("Orignal Order:", CountriesToVisit);

// print the Array in Alphabatic order without modifying the actual array list 
console.log("Alphabatical order:",[...CountriesToVisit].sort());

// show that the Array is still in its orignal order
console.log("still in orignal order:",CountriesToVisit);

// print the Array in Resversed order without modifying yhe actual array list
console.log("Reverse order:",[...CountriesToVisit].reverse());

// show that the Array is still in its orignal order
console.log("still in orignal order:",CountriesToVisit);

// we have changend the orignal array order now 
console.log("Orignal Array Reversed:",CountriesToVisit.reverse());

// print the array to show that it's back to its orignal order
console.log("Backn to orignal order:",CountriesToVisit.reverse());

//print the array to show that its order has been changed in Alphabatical ordeer now
console.log("sorted in Alohabatical order:",CountriesToVisit.sort());

// we have changend the orignal array order now again 
console.log("Orignal Array Reversed Again:",CountriesToVisit.reverse());
