import {Wheel} from "./components/Wheel";
import {VehicleType} from "./types";

export class Vehicle<T = VehicleType> {

  readonly type: T;
  readonly wheels: Wheel[];
  private numberOfWheels: number; // bigger than -1
  private fuel: number; // 0~100

  constructor(type: T, numberOfWheels: number, wheels: Wheel[], fuel: number) {
    this.type = type;
    this.numberOfWheels = numberOfWheels;
    this.validateNumOfWheels(numberOfWheels);
    this.validateWheelsArrayLength(wheels, numberOfWheels);
    this.validateFuel(fuel);
    this.wheels = wheels;
    this.fuel = fuel;
  }

  validateFuel(fuel: number) {
    if (fuel < 0 || fuel > 100) {
      throw new Error("Fuel must have a range 0~100");
    }
  }

  validateNumOfWheels(numberOfWheels: number) {
    if (numberOfWheels < 0 || numberOfWheels % 1 !== 0) {
      throw new Error("NumberOfWheels must be Natural bigger than -1");
    }
  }

  validateWheelsArrayLength(wheels: Wheel[], numberOfWheels: number) {
    if (!wheels) {
      throw new Error("Wheel does not exist");
    }
    if (wheels.length !== numberOfWheels) {
      throw new Error("Wheels length is different with numberOfWheels");
    }
  }

  getNumberOfWheels(): number {
    return this.numberOfWheels;
  }

  getFuel(): number {
    return this.fuel;
  }
}
