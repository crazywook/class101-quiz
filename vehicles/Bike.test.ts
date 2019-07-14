import {expect} from "chai";

import {Bike} from "./Bike";
import {Wheel} from "./components/Wheel";

describe("Bike", () => {

  it("When Bike was driven, all wheels rpm is 8", () => {

    const bike = new Bike(
      "Bike",
      2,
      [
        new Wheel("plastic"),
        new Wheel("plastic"),
      ],
      50,
    );

    bike.pedal();
    const wheels = bike.getWheels();
    
    expect(wheels.map(w => w.getRpm())).to.deep.equal([8, 8]);
  })
});
