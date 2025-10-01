// complete this js code
function Person(name, age) {
	this.name=name;
    this.age=age;
}
Person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

let p1=new Person("Alice",25);
p1.greet();
 


function Employee(name, age, jobTitle) {
	Person.call(this,name,age)
	this.jobTitle=jobTitle;

	Employee.prototype=Object.create(Person.prototype);
	Employee.prototype.constructor=Employee;

	Employee.prototype.jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}

let p2=new Employee("Soruab",26,"Developer");
p2.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
