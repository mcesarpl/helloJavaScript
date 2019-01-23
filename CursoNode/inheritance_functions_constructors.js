//construction of a new object using function constructor

let Person = function(firstname, lastname) {
	
	this.firstname = firstname;
	this.lastname = lastname;

};

let john = new Person('John', 'Doe');

console.log('Name: ' + john.firstname + ' ' + john.lastname);

//now lets add a method to this kind of object created with constructor function Person
//we do this by adding '.prototype.' plus the name of the method to the function constructor
//and describing the method

Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname 
		+ ' ' + this.lastname);
};

//you can call the method using dot like before :
john.greet();

//all objects created by this particular function constructor will have access to the same methods
let jane = new Person('Jane', 'Doe');
jane.greet();

//we can see the prototype functions (methods) add to this constructor (object) doing this :
console.log(john.__proto__);
console.log(jane.__proto__);

//obs: do not use this call '.__proto__' in production code, just to test
