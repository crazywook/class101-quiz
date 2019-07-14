export class Wheel {
  kind: string;
  private rpm = 0;

  constructor(kind: string) {
    this.kind = kind;
  }

  setNewRPM(r: number) {
    this.rpm = r;
  }

  getRpm() {
    return this.rpm;
  }
}
