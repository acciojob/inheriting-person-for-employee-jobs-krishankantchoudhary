// Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor
function Employee(name, age, jobTitle) {
  // Inherit name & age from Person
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Example usage
let p1 = new Person("Alice", 25);
p1.greet(); // Hello, my name is Alice and I am 25 years old.

let p2 = new Employee("Bob", 30, "Manager");
p2.jobGreet(); // Hello, my name is Bob, I am 30 years old, and my job title is Manager.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
