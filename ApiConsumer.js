//Cria uma variavel de requisição e atribui um novo objeto request para ele
let request4 = require('request');
let fs = require('fs');

// request4('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// request4.get('http://127.0.0.1:5001/games',(err,response)=>{
//     console.log(JSON.parse(response.body));
// });

request4.post({url:'http://127.0.0.1:5001/games', form: {id:'111', name:'Campo Minado',year:'1950',rating:'6.0'}},(err,httpResponse,body)=>{
    console.log(JSON.parse(httpResponse.body));
});

// request4({ url:'http://localhost:5001/games/115', 
//     method: 'PUT', 
//     json: {id: "115", name: "Cars",year:'2010',rating:'9.7'}},
//     (err,response,body)=>{
//         console.log(err);
//         console.log(response.body);
// });

// request4({ url:'http://localhost:5001/games/115', 
//     method: 'DELETE'},
//     (err,response,body)=>{
//         console.log(err);
//         console.log(response.body);
// });








