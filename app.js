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

  //console.log(nomCity); 
  //console.log(numTemperature);


let [parisId,nycId,...othersCitiesId] = citiesId;
//console.log(parisId);
//console.log(nycId);
//console.log(othersCitiesId.length);

class Trip{
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl=imageUrl;
        }
    get price(){
        return this._aprice;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    static getDefaultTrip(
        id = 'rio-de-janeiro',
        name = 'Rio de Janeiro',
        imageUrl = 'img/rio-de-janeiro.jpg') {
        return new Trip(id, name, imageUrl);
    }
        
    toString(){
        return "Trip ["+this.id+","+this.name+","+this.imageUrl+","+this._price+"]";
    }

}
let parisTrip = new Trip('paris','paris','img/paris.jpg');
//console.log(parisTrip);
//console.log(parisTrip.name);
parisTrip.price=100;
//console.log(parisTrip.toString());

const defaultTrip=Trip.getDefaultTrip();
console.log(defaultTrip.toString());

