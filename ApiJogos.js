let express = require('express');
let server = express();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_games');

let gameSchema = mongoose.Schema({
    name : String,
    year: Number,
    category: String
});

let Game = mongoose.model("Game",gameSchema);

server.use(express.static('publicGames'));

server.listen(5001,()=>{
    console.log('GamesServer is listening.');
});

server.get('/',(req,res)=>{
    res.render('GamesServerHome');
});

server.get('*',(req,res)=>{
    res.send("Sorry, this is an invalid URL.\n");
});

//Using Pug as a templating endine for Express
server.set('view engine','pug');
server.set('views','./views');