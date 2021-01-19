/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

  //wld create new object
// let jeremy = new Person({
//   firstName: "Jeremy",
//   lastName: "Black",
//   job: "a Student"
// });
// console.log(jeremy)


function Person(name,age) { //capital letter (function name) = constructor
  this.name = name;
  this.age = age;
  this.stomach = []; //array works, wld 0 too? must test
};

Person.prototype.eat = function(someFood){ //the .prototype confuses me weirdly much
  if(this.stomach.length < 10) {
    this.stomach.push (someFood);
    }
}

Person.prototype.poop = function(){
  while (this.stomach.length > 0){
    this.stomach.pop();
  } //while loop runs with condition until false
}

Person.prototype.toString = function(){ //gets info from person, no need to pass any
  return `${this.name}, ${this.age}`;
}
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0 //i.e. the meter
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) { //capital letter (function name) = constructor //contraption
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  };
  
  Car.prototype.fill = function(gallons){ //the .prototype means affects all members of class here Car
    return this.tank = this.tank + gallons; //no values to pass here, does it auto/scope
  };

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

function Baby(name, age, favoriteToy) { //why is baby underlined with 3 dots?
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
};

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}` //careful {} not [] with $
};
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
     1 -global binding: this scope = window/global
     2 -implicit binding: refers to function that is a property aka. method
     3 -new binding: new Person/ this will adjust to new (remember jerry/newman)
        i.e. specific instance 
     4 -explicit binding: call/apply method changes what this points to

    'this' notes: 
      -not unique to js, but behaves differently
      -the dinner table analogy, if at the table u get it, if playin games in living room not (scope)
       i.e. gives you objects context
      -doesn't matter WHERE WRITTEN but instead WHERE & WHEN function is CALLED

      console.log(this) // this points to entire scope //commiting project now due to deadline, 
      working some more on this post commit

  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}