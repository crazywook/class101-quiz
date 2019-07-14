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
