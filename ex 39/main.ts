//creating s function with parameters which return a values in string
function city_country(city: string, country: string) : string{
    return `${city}, ${country}`;
}

// calling a function snd print the returnend value

console.log(city_country("karachi", "pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));

