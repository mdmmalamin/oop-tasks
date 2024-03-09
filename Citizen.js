// const City = require('./City');
/*
***Citizen needs to have

	- a constructor
	- when a new citizen is created, it needs to automatically assign a random age (between 9 to 87)
*/

import City from './City'; 

class Citizen extends City {
  constructor() {
    super();
  }

  add_citizen(citizenName) {
    const citizenAge = Math.floor(Math.random() * 9) + 78;
    this.citizens.push({city: citizenName, age: citizenAge});
  }
}

const newCitizen1 = new Citizen();
newCitizen1.add_citizen('habib');

// export default Citizen;