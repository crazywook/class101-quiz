import {Vehicle} from "./Vehicle";

export class Bike extends Vehicle<"Bike"> {

  static readonly START_RPM = 8;

  pedal() {
    const numberOfWheels = this.getNumberOfWheels();
    for (let i = 0; i < numberOfWheels; i++) {
      const wheels = this.getWheels();
      wheels[i].setNewRPM(Bike.START_RPM);
    }
  }
}
