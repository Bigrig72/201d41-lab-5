'use strict';
/////////////////////////////////////
//Problem 1 (this is your demo that we'll solve in class)

function sum(a, b) {
  var add = a + b;
  var sentence = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b) + '.';
  return [add, sentence];
}

testSum(4, 7);


/////////////////////////////////////
//Problem 2

function multiply(a, b) {
  var product = a * b;
  var sentence = 'The product of ' + a + ' and ' + b + ' is ' + (a * b) + '.';


  return [product, sentence];
}
testMultiply(5, 9);

/////////////////////////////////////
//Problem 3

function sumAndMultiply(a, b, c) {
  var aPlusB = sum(a, b)[0];
  console.log('[0]', aPlusB);
  var aPlusBplusC = sum(aPlusB, c)[0];
  console.log('sum of abc', aPlusBplusC);
  var sentenceAdd = a + ' and ' + b + ' and ' + c + ' sum to ' + aPlusBplusC + '.';
  console.log(sentenceAdd);

  var multiplyAB = multiply(a, b)[0];
  console.log('product ab', multiplyAB);

  var multiplyABC = multiply(multiplyAB, c)[0];
  console.log('ab times c', multiplyABC);

  var sentenceMultiply = 'The product of '+ a + ' and ' + b + ' and ' + c + ' is ' + multiplyABC + '.';
console.log(sentenceMultiply);

  return [aPlusBplusC, multiplyABC, sentenceAdd, sentenceMultiply];
}


testSumAndMultiply(4, 7, 5);


// var sumAndMultiply = sumAndMultiply(aplusb,AplusBplusC);
// console.log(sumAndMultiply);

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4,7,5);
