// Definea function to ccreat a car object with optional options...
function create_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacture,
        model: model
    };
    // Add additional ooptions to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the funnction to creat a car object
var my_car = create_car("Toyota", "Carrolla", "Color: Black", "Sunroof: True", "Year: 2024");
// print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
