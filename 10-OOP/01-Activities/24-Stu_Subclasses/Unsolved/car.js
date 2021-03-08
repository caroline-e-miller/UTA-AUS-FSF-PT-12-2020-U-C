// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(color, carPassengers) {
    this.color = color;
    this.carPassengers = carPassengers;
  }

  useHorn() {
    console.log(`What's that ${this.sound}ing noise?!`);
  }

  checkPassengers() {
    if (this.carPassengers.length >= 4) {
      console.log('That is too many people, you crazy.');
    } else {
      console.log('Looking good, buckle up!');
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
