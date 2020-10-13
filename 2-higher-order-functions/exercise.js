// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let newArr = [];
  for (elem of array) {
    newArr.push(callback(elem));
  }
  return newArr;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let elem of array) {
    callback(elem);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let newArr = [];
  forEach(array, (val) => newArr.push(callback(val)));
  return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let finalVal = initialValue;
  for (let val of array) {
    finalVal = callback(finalVal, val);
  }
  return finalVal;
}

//Extension 3
const intersection = (...arrays) => arrays.reduce((acc, curr) => curr.filter(val => acc.includes(val)));

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return arrays.reduce((acc, curr) => {
    acc.push(curr.filter(val => !acc.includes(val))).flat();
    acc = acc.flat();
    return acc;
  });
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let answer = {};
  for(let i = 0; i < array1.length; i++) {
    if(array2[i] === callback(array1[i])) {
      answer[array1[i]] = array2[i];
    }
  }
  return answer;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6 -- Inelegant answer
function multiMap(arrVals, arrCallbacks) {
  let answer = {};
  answer[arrVals[0]] = [arrCallbacks[0](arrVals[0]), arrCallbacks[1](arrVals[0]), arrCallbacks[2](arrVals[0])];
  answer[arrVals[1]] = [arrCallbacks[0](arrVals[1]), arrCallbacks[1](arrVals[1]), arrCallbacks[2](arrVals[1])];
  answer[arrVals[2]] = [arrCallbacks[0](arrVals[2]), arrCallbacks[1](arrVals[2]), arrCallbacks[2](arrVals[2])];
  return answer;
}

// Refactored Answer using HOFs
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc, curr) => {
    acc[curr] = arrCallbacks.map(val => val(curr));
    return acc;
  }, {});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
