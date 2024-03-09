class World {
  constructor(num) {
    this.cities = [];
    this.createCities(num);
  }

  add_city(cityName) {
    if(cityName === undefined){
      for(let i = 0; i < 99; i++) {
        this.cities.push({city: this.generateAnyName(), citizens: this.generateCitizens()});
      }
    }
    this.cities.push({city: cityName, citizens: this.generateCitizens()});
  }

  get_cities() {
    return this.cities;
  }

  createCities(num) {
    for(let i = 0; i < num; i++) {
      this.cities.push({city: this.generateAnyName(), citizens: this.generateCitizens()});
    }
  }

  generateAnyName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 5;

    let anyName = characters[Math.floor(Math.random() * 26)].toUpperCase();
    for(let i = 1; i < nameLength; i++) {
      anyName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return anyName;
  }

  generateAge() {
    const minAge = 9;
    const maxAge = 87;
    const age = Math.floor(Math.random() *  (maxAge - minAge + 1)) + minAge;
    
    return  age;
  }

  generateCitizens() {
    let citizens = [];
    for(let i = 0; i < 50; i++) {
      const citizenName = this.generateAnyName();
      const citizenAge = this.generateAge();
      citizens.push({name: citizenName, age: citizenAge});
    }
    return citizens;
  }

  random_city() {
    if (this.cities.length === 0) return "No cities available.";
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }

  total_cities() {
    return this.cities.length;
  }
}

class City extends World {
  constructor(name) {
    super();
    this.citizens = [];
    this.add_city(name);
  }

  add_city(name) {
    if(name === undefined){
      return this.cities.push({city: this.generateAnyName(), citizens: this.generateCitizens()});
    }
    this.cities.push({city: this.name, citizens: this.generateCitizens()});
  }

  add_citizen(name, age) {
    this.citizens.push({name: name, age: age});
  }

  all_citizen() {
    const allCitizen = this.cities.map(citizensData => citizensData.citizens);
    allCitizen.map(citizen => this.citizens.push(...citizen));
  }
}

class Citizen extends World {
  constructor(name) {
    super();
    this.getInfo(name);
  }
  getInfo(name) {
    return this.cities.push({name: name, age: this.generateAge()});
  }
};