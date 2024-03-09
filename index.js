class World {
  constructor(num) {
    this.cities = [];
    this.createCities(num);
  }

  add_city(cityName) {
    this.cities.push(cityName);
  }

  get_cities() {
    return this.cities;
  }

  createCities(num){
    for (let i = 0; i < num; i++) {
      let cityName = `City ${i + 1}`;
      this.cities.push(cityName);
    }
  }

  random_city() {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }

  total_cities() {
    return this.cities.length;
  }
}

class City {
  #name;
  constructor(name = "") {
    this.#name = name;
    this.cities = [];
    this.createNewCity();
    this.citizens = [];
  }

  createNewCity() {
    if(this.#name === ""){
      console.log(this.#name);
      return this.cities.push(this.#generateRandomCityName());
    }
    this.cities.push({city: this.#name});
  }

  #generateRandomCityName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 5;

    // let newCity = characters[Math.floor(Math.random() * 26)].toUpperCase();
    let newCity = "";
    for (let i = 1; i < nameLength; i++) {
      newCity += characters.charAt(Math.floor(Math.random() * characters.length)).toLowerCase();
    }
    return newCity;
  }

  add_citizen(citizenName) {
    this.citizens.push({city: citizenName});
  }
}

class Citizen extends City {
  constructor() {
    super();
  }

  add_citizen(citizenName) {
    const citizenAge = Math.floor(Math.random() * 9) + 78;
    this.citizens.push({city: citizenName, age: citizenAge});
  }
}

const bd = new World(5);

bd.add_city('Dhaka');
bd.add_city('Rajshahi');

console.log(bd.cities);
// console.log(bd.createCities());
console.log(bd.get_cities());
console.log(bd.random_city());
console.log(bd.total_cities());


const dhaka = new City("Dhaka");
console.log(dhaka);

const blank = new City();
console.log(blank);

dhaka.add_citizen("Amin");
console.log(dhaka)

const newCitizen1 = new Citizen();
newCitizen1.add_citizen('habib');
console.log(newCitizen1);
