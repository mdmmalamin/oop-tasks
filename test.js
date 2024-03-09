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

const dhaka = new City("Dhaka");
console.log(dhaka);

const blank = new City();
console.log(blank);

dhaka.add_citizen("Amin");
console.log(dhaka)

const newC1 = new Citizen();
newC1.add_citizen('provat');
console.log(newC1)
