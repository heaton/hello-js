'use strict';

import {Driver} from '../src/driver'

describe("driver",function(){
  it("should receive integer money", () => {
    let driver = new Driver();
    let money = driver.receive(5, 0);
    expect(money).toBe(8);
  });
  it("should receive integer money", () => {
    let driver = new Driver();
    let money = driver.receive(8, 0);
    expect(money).toBe(11);
  });
});