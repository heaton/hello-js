'use strict';

const START_FARE = 6.0;

class TaxiFare {

  calculate(distance, waitTime) {
    return START_FARE + 
      this.normalFare(distance) +
      this.extraFare(distance) +
      this.waitFare(waitTime);
  }

  waitFare(waitTime) {
    return waitTime * 0.25;
  };

  extraFare(distance) {
    return Math.max(distance - 8, 0) * 0.4;
  };

  normalFare(distance) {
    return Math.max(distance - 2, 0) * 0.8;
  };

}

export {TaxiFare}