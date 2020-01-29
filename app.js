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
//console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString(){
        return "Free"+super.toString();
    }
}

const freeTrip = new FreeTrip('nantes','nantes','img/nantes.jpg');
console.log(freeTrip.toString());


class TripService {
    constructor() {
    // TODO Set of 3 trips
    //
    // new Trip('paris', 'Paris', 'img/paris.jpg')
    // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
    // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
    findByName(tripName) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de la
  recherche
    }, 2000)
    });
    }
  }
  class PriceService {
    constructor() {
    // TODO Map of 2 trips
    // 'paris' --> price == 100
    // 'rio-de-janeiro' --> price == 800)
    // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
    // ici l'exécution du code est asynchrone
    // TODO utiliser resolve et reject en fonction du résultat de la recherche
    }, 2000)
    });
    }
  }
  
