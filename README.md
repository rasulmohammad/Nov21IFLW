# Lesson 1.5: Loops

## for Loops
- Allows us to iterate over array elements.
- Consists of initialization, condition, and afterthought.
- `for (initialization; condition; afterthought) { /* code */ }`
  
```javascript
for (let i = 0; i < 4; i++) {
  console.log(i); // Output: 0, 1, 2, 3
}
```

### Initialization
- Usually initializes a loop counter.
  
### Condition
- Loop runs until this condition is false.

### Afterthought
- Updates the loop counter's value after each iteration.


## forEach Loops
- Calls a function once for each element in an array.
  
```javascript
let fruits = ["peach", "apple", "lemon"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

## for of Loops
- A more concise alternative to forEach loops.
  
```javascript
let fruits = ["peach", "apple", "lemon"];
for (let fruit of fruits) {
  console.log(fruit); // Output: peach, apple, lemon
}
```

## Which Loop to Use?
- `for` loops offer precision and flexibility.
- `forEach` and `for of` loops iterate through entire arrays; `forEach` is similar to other array functions, while `for of` is concise.
- Choice depends on requirements and personal preference.

## Other Loops
- There are various other loops available, such as `for in`, `while`, and `do…while`.

Happy coding!