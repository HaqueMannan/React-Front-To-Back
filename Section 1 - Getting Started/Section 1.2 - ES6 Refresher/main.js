// -----------------------------------
// CONST & LET
// -----------------------------------
var name = 'John';         //ES5 declaring variables.
let firstName = 'Harry';
console.log(firstName);    //Logs Harry.

// Change the variable property of a let variable.
firstName = 'Mark';
console.log(firstName);    //Logs Mark. 


let test;                  //We can init a let without assigning a value.
// let const;              //We cannot init a const otherwise error of unexpected token const.

//Mainipulate a Const Object
const person = {
   name: 'Elena',
   age: 33
};

person.name = 'Mary';      //We can change the name because we are manipulating a created object.
console.log(person);       //Logs Mary.

//We cannot recreate the const person object otherwise error of Uncaught TypeError.
// person = {
//    name: 'Mario',
//    age: 35
// }

//We can manipulate a const array. Example below demonstrates adding 5 to the array object.
const nums = [1,2,3,4];
nums.push(5)
console.log(nums);


// -----------------------------------
// ARROW FUNCTIONS
// -----------------------------------

//Regular ES5 Functions
function sayHello() {
   console.log('Hello');
}

sayHello();

//ES6 Arrow Functions 
//One line function do not require {} curly braces.
//One parameter does not require to be wrapped in () parentheses.
const sayHello2 = name => console.log(`Hello ${name}`);

sayHello2('Bella');

//Arrow Function with multiple parameter requires () parentheses, contrast with above.
const sayHello3 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello3('Roger', 'Rabbit');


// -----------------------------------
// FOREACH
// -----------------------------------
const fruits = ['Apples', 'Oranges', 'Grapes'];

//ES5 forEach Loop
fruits.forEach(function(fruit, index){
   console.log(fruit);
})

//ES6 Arrow Function ForEach loop (note the fruit parameter can be called anything e.g. x)
fruits.forEach((fruit, index) => console.log(fruit));

// -----------------------------------
// MAP
// -----------------------------------
//Loops through the array to remove the 's' within array item and then LowerCase/UpperCase each item e.g. Apples = Apple/APPLE

//ES5 Map Loops using function.
const singleFruitES5 = fruits.map(function(fruit){
   return fruit.slice(0,-1).toLowerCase();
});
console.log(singleFruitES5);

//ES6 Arrow functions with Map Loop.
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);


// -----------------------------------
// FILTER
// -----------------------------------
//Loops through the people array and filters out Bob, storing the new array in a const variable.
const people = [
   { id: 1, name: 'Karen' },
   { id: 2, name: 'Bob' },
   { id: 3, name: 'Sharon' }
];

//ES5 Filter using Function.
const people2 = people.filter(function(person) {
   return person.id !== 2
});
console.log(people2);


// ES6 Filter with Arrow Function. 
const people3 = people.filter(person => person.id !== 2);
console.log(people3);


// -----------------------------------
// SPREAD
// -----------------------------------



// -----------------------------------
// DESTRUCTURING
// -----------------------------------



// -----------------------------------
// CLASSES
// -----------------------------------



// -----------------------------------
// SUBCLASSES
// -----------------------------------


// -----------------------------------
// MODULES
// -----------------------------------