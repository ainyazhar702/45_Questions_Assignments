// Definea function to ccreat a car object with optional options...
function create_car(manufacture, model, ...options){
  // initialize a car object with manufacturer and model
   let car = {
    manufacturer: manufacture,
    model: model
   };

   // Add additional ooptions to the car object
   options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
   });

   return car;
}

// call the funnction to creat a car object
let my_car = create_car("Toyota", "Carrolla", "Color: Black", "Sunroof: True", "Year: 2024");

// print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
