import {Vehicle} from "./Vehicle";

export class Car extends Vehicle<"Car"> {

  static readonly START_RPM = 5;

  drive() {
    const numberOfWheels = this.getNumberOfWheels();
    for (let i = 0; i < numberOfWheels; i++) {
      this.wheels[i].setNewRPM(Car.START_RPM);
    }
  }
}
