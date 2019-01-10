// function statement
let greet = function(){
    console.log('hi');
};

// functions are first-class
let logGreeting = function(fc, gd){
    fc();
    gd();
};

logGreeting(greet, function(){
    console.log('Hello!');
});

module.exports = greet;