let express = require('express');
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();
let server = express();
let games = require('./games.js');
let mongoose = require('mongoose');

server.use(express.static('publicGames'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(upload.array());
server.use('/games',games);

mongoose.connect('mongodb://localhost/db_games');

let gameSchema = mongoose.Schema({
    name : String,
    year: Number,
    category: String
});

let Game = mongoose.model("Game",gameSchema);

server.listen(5001,()=>{
    console.log('GamesServer is listening.');
});

server.get('/',(req,res)=>{
    res.render('GamesServerHome');
});

server.get('*',(req,res)=>{
    res.status(404);
    res.send("<h1>Sorry, this is an invalid URL request.<h1>");
});

//Using Pug as a templating endine for Express
server.set('view engine','pug');
server.set('views','./views');