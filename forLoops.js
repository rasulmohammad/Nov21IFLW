let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// 1. Use a for loop to display each fruit to the console.
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

console.log("separation here ------");


let horrorMovies = [
    "The Exorcist",
    "Halloween",
    "A Nightmare on Elm Street",
    "The Shining",
    "The Texas Chain Saw Massacre",
    "Night of the Living Dead"
  ];


// 2. Use a for loop to display the first three items in the horrorMovies array to the console..
for(let i = 0; i < 3; i++){
  console.log(horrorMovies[i]);
}

console.log("separation here ------");

// 3. Can you create a loop that only does the last three in the array? Try it out.
for(let i = horrorMovies.length - 3; i < horrorMovies.length; i++){
  console.log(horrorMovies[i]);
}