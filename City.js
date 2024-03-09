/*
  *** City needs to have

	- constructor(name) - that creates a new city with the given 'name' or if 'name' is blank, it can automatically create a random city name that's 5-9 characters long and composed of lowercase alphabets. ✔
	- a method called add_citizen - where you can create a new citizen ✔
	- an attribute called citizens - where this would be an array containing all the citizen objects ✔
*/

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

// const dhaka = new City("Dhaka");
// console.log(dhaka);

// const blank = new City();
// console.log(blank);

// dhaka.add_citizen("Amin");
// console.log(dhaka)

export default City;