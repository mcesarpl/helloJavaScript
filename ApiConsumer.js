//Cria uma variavel de requisição e atribui um novo objeto XMLHttpRequest para ele
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();
let method = 'GET'
let url = 'http://10.102.20.207:5000/movies/';
//Abre uma nova conecção usando requisição GET na URL

//request para todos os jogos no server
// console.log('Requisição para todos os games :');
// request.open(method,url,true);

// request.onload = ()=>{
//     let data = JSON.parse(request.responseText);
//     if(data instanceof Array){
//         data.forEach(game => {
//             console.log(game.name);
//         });
//     }else{
//         console.log(data.name);
//     }
    
// }

//  request.send();


// //request para um jogo em espesifico
// console.log('Requisição apenas para o game 102 :');
// let url1 = 'http://localhost:5001/games/102';
// let request1 = new XMLHttpRequest();
// request1.open(method,url1,true);

// request1.onload = ()=>{
//     let data = JSON.parse(request1.responseText);
//     if(data instanceof Array){
//         data.forEach(game => {
//             console.log(game.name);
//         });
//     }else{
//         console.log(data.name);
//     }
    
// }

// request1.send();

//request para deletar um jogo especifico
// console.log('Requisição para deletar um jogo especifico : ');
// let url2 = 'http://localhost:5001/games/180';
// let request2 = new XMLHttpRequest();
// request2.open('DELETE',url2,true);

// request2.onload = ()=>{
//     console.log(request2.responseText);
// }

// request2.send();


//request para POST de um jogo especifico
console.log('Requisição para post de um jogo especifico : ');
let request3 = new XMLHttpRequest();

let data = {};
//data.id =106;
data.name="3D";
data.year=2013;
data.rating=9.4;

let json = JSON.stringify(data);

request3.open("POST",url,true);

request3.setRequestHeader('Content-type','application/json; charset=utf-8');
request3.onload = function () {
    let users = JSON.parse(request3.responseText);
    console.log(this.readyState + ' ' + this.status);
}
//let tent1 = JSON.stringify({ id: '108', name: 'Uncharted', year: '2012', rating: '9.0' });
//let tent2 = {"id":106,"name":"3D","year":2013,"rating":9.4};


//console.log(json);

request3.send(json);

