//primitive variables like numbers, chars or strings when passed to functions make a copy of them

var a = 1;

let change = function (b){
	b = 2;
};

change(a);

console.log(a);

//note that a still has the value of 1

//now, when variables passed is note a primitive, like a object, them the functions variable points to
//the same memory address of the variable passed

var c = {name:"Alex"};

let change2 = function(v){
	v.name = "Ariel";
};

change2(c);

console.log(c.name);

//note that the variable passed value has changed after calling the function
