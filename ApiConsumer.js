//Cria uma variavel de requisição e atribui um novo objeto XMLHttpRequest para ele
let request = new XMLHttpRequest();

//Abre uma nova conecção usando requisição GET na URL
request.open('GET','http://localhost:5001',true);

request.onload = ()=>{
    let data = JSON.parse(this.response);
    data.array.forEach(game => {
        console.log(game.name);
    });
}

request.send();
