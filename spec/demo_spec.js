import ES6 from '../src/es6';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("should say hello to me", () => {
    expect(new ES6().hello("Heaton")).toEqual("Hello, Heaton");
  });
});
