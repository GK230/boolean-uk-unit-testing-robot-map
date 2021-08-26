const { printPosition } = require("../print");

describe("Test the print function", () => {
  it("should print the robot's current position", () => {
    const currentPosition = { x: 5, y: 5 };

    expect(printPosition(currentPosition)).toEqual(
      "Robot is at { x: 5, y: 5 }"
    );
  });
});
