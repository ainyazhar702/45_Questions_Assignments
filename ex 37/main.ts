// Making a function 
function make_shirt (size: string = "Large", printMessage: string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
} 

//calling a function with by defualt values
make_shirt();

// calling a function now with medium size and  default message
make_shirt("Medium")

// calling a function now with small size and different print messag
make_shirt("Small", "I love javasdcript")