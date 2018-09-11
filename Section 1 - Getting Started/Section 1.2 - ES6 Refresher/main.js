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
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
console.log(arr2);               //Returns [1,2,3,4]

// Combination of spread and filter operators.
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);               //Returns [1,3]

const personObj = {
   name: 'Tony',
   age: 40
};
console.log(personObj);          //Returns name:'Tony', age:'40'

const newPersonObj = {
   ...personObj,
   email: 'tony@gmail.com'
};
console.log(newPersonObj);       //Returns name:'Brad', age:'36', email:'tony@gmail.com'


// -----------------------------------
// DESTRUCTURING
// -----------------------------------
//Profile Object
const profile = {
   fullName: 'John Doe',
   address: {
      street: '50 Burton Street',
      city: 'UK'
   },
   hobbies: ['Movies', 'Music']
};

console.log(profile.fullName);         //Returns 'John Doe' from the profile object.

// const { fullName } = profile;
// console.log(fullName);                 //Also returns 'John Doe'

const { fullName, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(fullName, address, hobbies);              //Returns the name, address and all hobbies.
console.log(fullName, address.street, hobbies[0]);    //Returns the name, street and first hobbies.
console.log(street);                                  //Returns the street from address.


// -----------------------------------
// CLASSES
// -----------------------------------
//CLass Example:
class helloWorldClass{
   constructor(){
      console.log('Hello World')
   }
}

//Instantiating a new object from the helloWorldClass class. The constructor above will automatically run the property method and console log 'Hello World' in the JavaScript console.
const helloWorld = new helloWorldClass();

// Person Class Example:
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      return `Hello, my name is ${this.name} and I am ${this.age}`;
   }
}

//New Person Object using the Person Class:
const person1 = new Person('John Doe', 28);
console.log(person1);                              //Returns the person1 object {name: 'John Doe', age: 28}
console.log(person1.name);                         //Returns 'John Doe' from the person1 object.
console.log(person1.greet());                      //Returns the greet() method.


// -----------------------------------
// SUBCLASSES
// -----------------------------------
//The Customer Class extends from the Person Class above.
//We use super() to get the properties from the parent class.
class Customer extends Person {
   constructor(name, age, balance) {
      super(name, age);
      this.balance = balance;
   }

   info() {
      return `${this.name} owes £${this.balance}.00`;
   }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1);                //Returns the customer1 object {name:'Kevin', age:32, Balance: £300}
console.log(customer1.info());         //Return 'Kevin owes £300.00' in the console.


// -----------------------------------
// MODULES
// -----------------------------------
//Example of Modules - This will not work within the browser as we need Webpack/Babel to help with JavaScript Modules which are not setup.

//FILE 1 MODULE (file1.js) EXPORTS:
// export const name = 'Jeff';
// export const nums = [1, 2, 3];
// export default Person;

// class Person {
//    constructor(name, age) {
//       this.name = name;
//    }
// }

// FILE 2 (file2.js) IMPORTS MODULES FROM FILE 1:
// import { name, nums } from './file1';
// import Person from './file1';