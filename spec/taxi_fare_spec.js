'use strict';
import {TaxiFare} from '../src/taxi_fare'

describe("Taxi fare calculator", () => {

  const taxiFare = new TaxiFare();
  
  it("should show 6 as price before 2km", () => {
    let fare = taxiFare.calculate(2, 0);
    expect(fare).toBe(6.0);
  });

  it("should show normal price when distance between 2 and 8", () => {
    let fare = taxiFare.calculate(5, 0);
    expect(fare).toBeCloseTo(8.40);
  });

  it("should show normal price when distance is 8km", () => {
    let fare = taxiFare.calculate(8, 0);
    expect(fare).toBeCloseTo(10.80);
  });

  it("should show extra price when distance is after 8km", () => {
    let fare = taxiFare.calculate(10, 0);
    expect(fare).toBeCloseTo(13.20);
  });

  it("should show extra price when distance is 20km", () => {
    let fare = taxiFare.calculate(20, 0);
    expect(fare).toBeCloseTo(25.20);
  });
  
  it("should add wait fee when there is wait time", () => {
    let fare = taxiFare.calculate(2, 1);
    expect(fare).toBeCloseTo(6.25);
  });
  
});
