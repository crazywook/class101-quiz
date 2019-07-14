import {Vehicle} from "./Vehicle";

export class Wheel {
  kind: string;
  rpm = 0;

  constructor(kind: string) {
    this.kind = kind;
  }

  setNewRPM(r: number) {
    this.rpm = r;
  }
}

class Car extends Vehicle {
  // 시동을 켠다
  run() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 5;
    }
  }
  isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

class Bike extends Vehicle {
  // 페달을 밟는다
  start() {
    for (let i = 0; i < this.getNumberOfWheels(); i++) {
      this.wheels[i].rpm = 8;
    }
  }
  isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}

// ------------

const vehiclesInRoad: Vehicle[] = [];

const car = new Car(
  4,
  [
    new Wheel("rubber"),
    new Wheel("rubber"),
    new Wheel("rubber"),
    new Wheel("ribber"),
  ],
  100,
);

const bike = new Bike(
  2,
  [
    new Wheel("plastic"),
    new Wheel("plastic"),
  ],
  50,
);

vehiclesInRoad.push(car);
vehiclesInRoad.push(bike);
car.run();
bike.start();

console.log("All vehicles on road: ", vehiclesInRoad);
console.log("isEmpty: ", car.isRoadEmpty(vehiclesInRoad));
