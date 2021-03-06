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

  var sentenceMultiply = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplyABC + '.';
  console.log(sentenceMultiply);

  return [aPlusBplusC, multiplyABC, sentenceAdd, sentenceMultiply];
}


testSumAndMultiply(4, 7, 5);


/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line
sumArray(testArray);



function sumArray(sumArr) { //eslint-disable-line

  var sumTotal = 0;
  console.log('Total: ' + sumTotal);

  for (var i = 0; i < sumArr.length; i++) {
    sumTotal = sum(sumTotal, sumArr[i])[0];
    console.log('Total: ' + sumTotal);
  }


  var arrayAsString = sumArr.join();

  var sentence = arrayAsString + ' was passed in as an array of numbers, and ' + sumTotal + ' is their sum.';
  console.log('sentence of sum array: ' + sentence);

  return [sumTotal, sentence];
}


// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!


/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here


function multiplyArray(multArr) { //eslint-disable-line

  var multiplyTotal = 1;
  console.log('Total: ', multiplyTotal);
  for (var i = 0; i < multArr.length; i++) {
    multiplyTotal = multiply(multiplyTotal, multArr[i])[0];
    console.log('multiply total: ', + multiplyTotal);

  }

  var sentenceAsString = multArr.join();
  console.log('sentence as a string: ', sentenceAsString);
  var sentenceMultiplyString = 'The numbers ' + sentenceAsString + ' have a product of ' + multiplyTotal + '.';
  console.log('sentence multiply string: ' + sentenceMultiplyString);
  return [multiplyTotal, sentenceMultiplyString];

}
// multiplyArray(testArray);

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////


/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here

var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line


function multiplyAnyArray(dynamicArray) { //eslint-disable-line

  return multiplyArray(dynamicArray);

}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.