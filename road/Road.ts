import {VehicleType} from "../vehicles/types";
import {Vehicle} from "../vehicles/Vehicle";

export class Road {

  private vehicles: Vehicle[] = [];

  addVehicles(vehicles: Vehicle[]): void {
    this.vehicles.push(...vehicles);
  }

  isRoadEmpty(): boolean {
    return this.vehicles.length === 0;
  }

  showVehicles(): string {
    return this.vehicles.map(v => v.getType()).join(",");
  }
}
