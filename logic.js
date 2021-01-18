class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep.';
	}
	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}
let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
console.log(myFirstVehicle.toString());
console.log(myFirstVehicle.honk());
let myFirstCar = new Car('Toyota', 'Corolla', 2005);
console.log(myFirstCar.honk());
console.log(myFirstCar.toString());
console.log(myFirstCar.numWheels);

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM!!!';
	}
}
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
console.log(myFirstMotorcycle.toString());
// "The vehicle is a Honda Nighthawk from 2000."

console.log(myFirstMotorcycle.honk()); // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels); // 2

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	add(vehicle) {
		if (vehicle instanceof Vehicle) {
		} else {
			return 'Only vehicles are allowed in here!';
		}
		if (this.vehicles.length < this.capacity) {
			this.vehicles.push(vehicle);
		} else {
			return "Sorry, we're full.";
		}
	}
}
