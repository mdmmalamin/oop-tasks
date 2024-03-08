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

const bd = new World(5);

bd.add_city('Dhaka');
bd.add_city('Rajshahi');

console.log(bd.cities);
// console.log(bd.createCities());
console.log(bd.get_cities());
console.log(bd.random_city());
console.log(bd.total_cities());
