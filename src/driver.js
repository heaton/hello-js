'use strict';

import {TaxiFare} from './taxi_fare'

class Driver {

  receive(distance, waitTime) {
    return Math.round(new TaxiFare().calculate(distance, waitTime));
  }
}

export {Driver}