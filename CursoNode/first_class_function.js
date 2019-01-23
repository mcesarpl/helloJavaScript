// function statement
let greet = function() {
    console.log('hi');
};

// functions are first-class
// this means you can use a function like any other type (char, int, var ...)
// and you can either pass it to another function
// Lets creat a function that recives two other functions as parameters:

let logGreeting = function(fc, gd) {
    fc();
    gd();
};

//Now lets call it passing the parameters :
//the first parameter we'll pass the function 'greet' wrote above,
//the second parameter we'll write the function :

logGreeting(greet, function() {
    console.log('Hello!');
});

//You can exports this module and use it functions 
//in other modules using require doing this here:

module.exports = greet;
