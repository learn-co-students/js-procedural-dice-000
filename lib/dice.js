'use strict';


function roll() {
  var minimum = 1;
  var maximum = 6;
  var randomnumber = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  return randomnumber;
}
