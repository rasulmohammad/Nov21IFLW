const colors = ["blue", "green", "white"];

// 1.  Using a forEach loop:
//  - Log every color from the colors array to the console.
colors.forEach((e) => console.log(e));

console.log("separation here ------");


let nums = [35, 482, 201, 98];
// 2. Using a forEach loop:
//  - Find and print the sum of the nums array.
let numsSum = 0;
nums.forEach((e) => numsSum += e);
console.log(numsSum);

console.log("separation here ------");


const cats = ["siamese", "calico", "persian", "scottish fold"];
// 3. Using a for of loop:
//  - Print the first letter of each cat to the console.
for(let cat of cats){
  console.log(cat.charAt(0));
}

console.log("separation here ------");


const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23];
// 4. Using a for of loop:
//  - Calculate the square of every element in the primeNums array.
let squares = [];
for(let num of primeNums){
  squares.push(Math.sqrt(num));
}
console.log(squares);
console.log("separation here ------");

// 5. Using a for loop:
//  - Iterate from 0 to 15.
//  - For each iteration, it should check:
//    - If the current number is odd or even,
//    - and print it to the console.
//
//  Sample output:
//    "0 is even"
//    "1 is odd"
//    "2 is even"

for(let i = 0; i < 16; i++){
  if(i % 2 === 0){
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

console.log("separation here ------");


// 6. Using a for loop:
//  - Iterate the integers from 1 to 15.
//  - For multiples of three, print "Fizz" instead of the number
//  - For multiples of five print "Buzz"
//  - For numbers that are multiples of both three and five print "FizzBuzz".
//
//    Sample output:
//     1
//     2
//     Fizz
//     4
//     Buzz
//     Fizz
//     7
//     8
//     Fizz
//     Buzz
//     11
//     Fizz
//     13
//     14
//     FizzBuzz
//     -----
for(let i = 1; i < 16; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if(i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("separation here ------");


// BONUS LOOPS!!
// Write a JavaScript program to construct the following pattern,
//    using a nested for loop.
//
//    Output:
//     *
//     * *
//     * * *
//     * * * *
//     * * * * *

for(let i = 1; i < 6; i++){
  let tempStr = "";
  for(let j = 0; j < i; j++){
    tempStr += "*";
  }
  console.log(tempStr);
}

console.log("separation here ------");


// Write a function called doubleValues that takes an array
//    as a parameter. The function should return a new array
//    with all the values in the array doubled
//
//    Examples & Sample Output:
//     doubleValues([1,2,3]) // [2,4,6]
//     doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
//
//    Uncomment the two arrays below to use and test out the function.
//     const testArr1 = [7, 3, 2, 6, 0];
//     const testArr2 = [5, 10, 25, 15, 45];
function doubleValues(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
console.log(doubleValues([7, 3, 2, 6, 0]));
console.log(doubleValues([5, 10, 25, 15, 45]));