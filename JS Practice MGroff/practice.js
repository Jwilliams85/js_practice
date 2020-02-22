
// create a higher order function that acts as a bank teller, the function will take in three   
// args (ammount, account_num, callback)  the call back will be either the deposit or withdraw  
// functions dependending on your desired transaction, this the teller function will return 
// the callback function with the ammount and account number as parameters
console.log(bankRoll)
//********************************************************************
//#1

//*********************************************************************

// create a function called multiplier and have return the bankRoll multiplied by what ever 
// multiplier number that is entered

//********************************************************************
//#2

//*********************************************************************

// create two spaceship objects that contain these characteristics " name, topspeed, galaxy, created, warpdrive(true or false)" 
// supply our own values for the characteristics;

//********************************************************************
//#3.a

//*********************************************************************

// how would we check the values of either of the spaceships chacteristics?
//********************************************************************
//#3.b

//*********************************************************************
//add a method to one spaceship called destroy: have it return a string that says "BOOM!"


// For the next few we will use the movie dataset I created in movies.js file

/* Request 1: Create a new array called titles, once you get the array sort it alphabetically. 
//********************************************************************
//#4.a

//*********************************************************************

/* Request 2: Create a new array called director, that array should be structured with id then a space then dirctor name (this will be an array of strings). 
//********************************************************************
//#4.b

//*********************************************************************

/* Request 3: Create a new array called meta, return all the movies that have a metascore over 90(this will be an array of objects). 
//********************************************************************
//#4.c

//*********************************************************************

// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.



/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/


/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/



/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/


/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/



//********************************************************************
//#5

//*********************************************************************
//********************************************************************
//#4.e

//*********************************************************************
//********************************************************************
//#4.f

//*********************************************************************
let mult = multiplier(bankRoll,10);
console.log(mult)
teller(500,11111,deposit)
teller(500000, 11111, withdraw)
console.log(bankRoll)

/* ===== Prototype Practice ===== */

// Task: You are to build a pool maker that can return values for a pool's volume or surface area. pools are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named SwimPoolPlanner that accepts properties for length, width, and height
*/



/* == Step 2: Volume Method ==
  Create a method using SwimPoolPlanner's prototype that returns the volume of a given pool's length, width, and height
  


  Formula for pool volume: length * width * height
*/



/* == Step 3: Surface Area Method ==
  Create another method using SwimPoolPlanner's prototype that returns the surface area of a given pool's length, width, and height. 

  Formula for pool surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses SwimPoolPlanner ==
  Create a pool object that uses the new keyword to use our SwimPoolPlanner constructor
  Add properties and values of length: 20, width: 16, and height: 8 to pool.   
*/



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(pool.volume()); // 100
console.log(pool.surfaceArea()); // 130


// 1. Copy and paste your prototype in here and refactor into class syntax.



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(pool.volume()); // 100
console.log(pool.surfaceArea()); // 130

// Stretch Task: Extend the base class SwimPoolPlanner with a sub class called SinglePool.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from SwimPoolPlanner.  Test your work by logging out your volume and surface area.



