var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print its orignal order
var CountriesToVisit = ["Denmark", "Canada", "Brazil", "America"];
console.log("Orignal Order:", CountriesToVisit);
// print the Array in Alphabatic order without modifying the actual array list 
console.log("Alphabatical order:", __spreadArray([], CountriesToVisit, true).sort());
// show that the Array is still in its orignal order
console.log("still in orignal order:", CountriesToVisit);
// print the Array in Resversed order without modifying yhe actual array list
console.log("Reverse order:", __spreadArray([], CountriesToVisit, true).reverse());
// show that the Array is still in its orignal order
console.log("still in orignal order:", CountriesToVisit);
// we have changend the orignal array order now 
console.log("Orignal Array Reversed:", CountriesToVisit.reverse());
// print the array to show that it's back to its orignal order
console.log("Backn to orignal order:", CountriesToVisit.reverse());
//print the array to show that its order has been changed in Alphabatical ordeer now
console.log("sorted in Alohabatical order:", CountriesToVisit.sort());
// we have changend the orignal array order now again 
console.log("Orignal Array Reversed Again:", CountriesToVisit.reverse());
