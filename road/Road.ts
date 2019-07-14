import {VehicleType} from "../vehicles/types";
import {Vehicle} from "../vehicles/Vehicle";

export class Road {

  private vehicles: Vehicle[] = [];

  addVehicles(vehicles: Vehicle[]) {
    console.log(vehicles);
    this.vehicles.push(...vehicles);

  }

  isRoadEmpty(): boolean {
    return this.vehicles.length === 0;
  }

  showVehicles() {
    return this.vehicles.map(v => v.type).join(",");
  }
}
