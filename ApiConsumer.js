//Cria uma variavel de requisição e atribui um novo objeto XMLHttpRequest para ele
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();
let method = 'GET'
let url = 'http://localhost:5001/games/';
//Abre uma nova conecção usando requisição GET na URL

// //request para todos os jogos no server
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

// request.send();
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
let params = "id=105&name=Zelda&year=1987&rating=9.8";
// let FormData = require('formdata');
// let params = new FormData();
// params.append("id",105);
// params.append("name","Zelda");
// params.append("year",1987);
// params.append("rating",9.8);
request3.open("POST",url,true);

request3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// request3.setRequestHeader("Content-length",params.length);
// request3.setRequestHeader("Connection","close");

request3.onreadystatechange = ()=>{
    if(request3.readyState == 4 && request3.status == 200){
        console.log(request3.responseText);
    }
}

request3.send(params);