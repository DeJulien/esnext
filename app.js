let favoriteCityId="rome";
//console.log(favoriteCityId);
favoriteCityId="paris";
//console.log(favoriteCityId);

const citiesId =["paris", "nyc", "rome", "rio-de-janeiro"];
//console.log(citiesId);
//Assignment to constant variable.
//citiesId=[];
citiesId.push("tokyo");
//console.log(citiesId);

function getWeather(citiesId){
    let city=citiesId.toUpperCase();
    let temperature =20;
    return {city:city,temperature:temperature};
    
}
const weather = getWeather(favoriteCityId);
//console.log(weather);

let {
    city: nomCity,
    temperature: numTemperature
  } = weather;

  console.log(nomCity); // Robert
  console.log(numTemperature);