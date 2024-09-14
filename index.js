// qstn 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
// Ans:

function calculateDifference(a, b) {
  let difference = a - b;
  return difference;
}
let result = calculateDifference(30, 20);
console.log(result);





// qstn 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
// Ans:

function isOdd(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(7));
console.log(isOdd(10));




// qstn 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
// Ans:

function findMin(numbers) {
  let minNumber = Math.min(...numbers);
  return minNumber;
}

let numbers = [5, 3, 9, 1, 6];
console.log(findMin(numbers));




// qstn 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
// Ans:

function filterEvenNumbers(numbers) {
  let num = numbers.filter((number) => number % 2 === 0);
  return num;
}

let numberArray = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(numberArray);
console.log(evenNumbers);




// qstn 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
// Ans:

function sortArrayDescending(arr) {
    let reversedArray = arr.sort().reverse()
    return reversedArray
}

const givenNumbers = [5456,547554,54,5489,867,5];
const sortedNumbers = sortArrayDescending(givenNumbers);
console.log(sortedNumbers);




// qstn 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
// Ans:

function lowercaseFirstLetter(str) {
  let lowerFirstIndex = str[0].toLowerCase()
  let restElement = str.slice(1)
  let output = lowerFirstIndex + restElement
  return output
}
const originalString = "Walid";
const modifiedString = lowercaseFirstLetter(originalString);
console.log(modifiedString);





// qstn 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
// Ans:

function countVowels(vowel) {
  const vowelsLetter = 'aeiouAEIOU';
  
  let totalVowel = 0;
  
  for (let i = 0; i < vowel.length; i++) {
      if (vowelsLetter.includes(vowel[i])) {
        totalVowel++;
      }
  }
  
  return totalVowel;
}

const inputString = "Walid";
console.log(countVowels(inputString));







// qstn 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
// Ans:

function findAverage(numbers) {
  let sum = 0
  numbers.forEach(num => {
    sum+=num
  });
  
  let avg = sum / numbers.length
  
  return avg;
}

const num = [10, 20, 30, 40, 50, 100];
console.log(findAverage(num))
