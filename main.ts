import {Road} from "./road/Road";
import {Bike} from "./vehicles/Bike";
import {Car} from "./vehicles/Car";
import {Wheel} from "./vehicles/components/Wheel";
import {Vehicle} from "./vehicles/Vehicle";

const car = new Car(
  "Car",
  4,
  [
    new Wheel("rubber"),
    new Wheel("rubber"),
    new Wheel("rubber"),
    new Wheel("rubber"),
  ],
  100,
);

const bike = new Bike(
  "Bike",
  2,
  [
    new Wheel("plastic"),
    new Wheel("plastic"),
  ],
  50,
);

const road = new Road();

road.addVehicles([car, bike]);
car.drive();
bike.pedal();

console.log("All vehicles on road: ", road.showVehicles());
console.log("isEmpty: ", road.isRoadEmpty());
