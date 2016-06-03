import {say, Dog as Animal} from '../src/es6';
// import * as es6 from '../src/es6';

describe("Modules", () => {
  it("should say", () => {
    expect(say("Hello")).toBe("say Hello");
    expect(say.name).toBe("say");
  });

  it("should be a Dog", () => {
    expect(new Animal().say()).toBe("Wong");
    expect(Animal.name).toBe("Dog");
  });
});