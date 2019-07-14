import {expect} from "chai";

import {Car} from "./Car";
import {Wheel} from "./components/Wheel";

describe("Car", () => {

  it("When Car was driven, all wheels rpm is 5", () => {

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

    car.drive();
    const wheels = car.getWheels();
    
    expect(wheels.map(w => w.getRpm())).to.deep.equal([5, 5, 5, 5]);
  })
});
