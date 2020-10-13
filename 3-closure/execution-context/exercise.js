// Create the execution context flow of the this function

// Diagrams added in the image folder alongwith the js file
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();

// Execution Flow
var counter = undefined;
// In the execution phase =>
counter =

(function () {
  var privateCounter = undefined;
  privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

counter = {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };

privateCounter = -1;

counter.value();
// privateCounter = 0
counter.increment();
// privateCounter = 1
counter.increment();
// privateCounter = 2
counter.value();
// privateCounter = 2
counter.decrement();
// privateCounter = 1
counter.value();
// privateCounter = 1

