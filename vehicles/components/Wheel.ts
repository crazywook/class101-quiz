import {WheelKind} from "../types";

export class Wheel {
  kind: WheelKind;
  private rpm = 0;

  constructor(kind: WheelKind) {
    this.kind = kind;
  }

  setNewRPM(r: number) {
    this.rpm = r;
  }

  getRpm() {
    return this.rpm;
  }
}
