//creating a simple object
//object is a name/value separeted by commas and inside braces
//the value can be number, string, another name with value, another object, vector or a function

let person = {
	firstname: 'John',
	lastname: 'Doe',
	age: 27,
	greet: function() {
			console.log('Hello, ' + this.firstname + ' ' + 
			this.lastname);
		}
};

//you can access a value in the object using to ways : a dot or a bracket
//using a dot look like this above:

person.greet();
console.log('Name: ' + person.firstname);
console.log('Age: '+ person.age);

//using a bracket takes like this:
console.log('Name: ' + person['firstname']);
