/*
	- a method called add_city - where you can pass the city name and it adds to its list ✔
	- an attribute called cities - where this would be an array containing all the city object ✔ 
	- constructor(num) - that creates num number of cities. for example new World(50) should create 50 new cities and store this. ✔
	- a method called random_city - where it pulls out a random city object ✔
	- a method called total_cities() - that returns the total number of cities in this world ✔
*/

class World {
  #cities;
  constructor(num) {
    this.#cities = [];
    this.#createCities(num);
  }

  add_city(cityName) {
    this.#cities.push({city: cityName});
  }

  get_cities() {
    return this.#cities;
  }

  #createCities(num) {
    for (let i = 0; i < num; i++) {
      let cityName = this.#generateRandomCityName();
      this.#cities.push({city: cityName});
    }
  }

  #generateRandomCityName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 5;

    let cityName = characters[Math.floor(Math.random() * 26)].toUpperCase();
    for (let i = 1; i < nameLength; i++) {
      cityName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return cityName;
  }

  random_city() {
    if (this.#cities.length === 0) return "No cities available.";
    const randomIndex = Math.floor(Math.random() * this.#cities.length);
    return this.#cities[randomIndex];
  }

  total_cities() {
    return this.#cities.length;
  }
}

const bd = new World(2);
// bd.add_city('Dhaka');
// bd.add_city('Rajshahi');

// console.log(bd.cities);
// console.log(bd.createCities());
console.log(bd.get_cities());
console.log(bd.random_city());
console.log(bd.total_cities());
console.log(Math.floor(Math.random()*5) + 5);