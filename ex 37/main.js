// Making a function 
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//calling a function with by defualt values
make_shirt();
// calling a function now with medium size and  default message
make_shirt("Medium");
// calling a function now with small size and different print messag
make_shirt("Small", "I love javasdcript");
