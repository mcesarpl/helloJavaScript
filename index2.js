let express = require('express');
let bodyParser = require('body-parser');
let multer = require('multer');
let cookieParser = require('cookie-parser');
let upload = multer();
let app = express();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_db');

let personSchema = mongoose.Schema({
    name : String,
    age: Number,
    nationality: String
});

let Person = mongoose.model("Person",personSchema);

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 

//para usar o folder public contendo objetos, no caso imagens
app.use(express.static('public'));

//para usar o cookie parser
app.use(cookieParser());

app.post('/person', (req, res)=>{
    console.log("Entrei no Post");
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       let newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       newPerson.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", person: personInfo});
       });
    }
 });

//atualiza o primeiro objeto no DB com a condição nacionalidade Brasileiro
app.get('/peoplec', (req, res)=>{
    Person.update({nationality: "Brasileiro"},{nationality: "American"}, function(err, response){
        console.log(response);
    });
 });

//retorna todos as tuplas com condicional passada, como n foi passada nenhuma entao retorna todas as tupals do DB
app.get('/people', (req, res)=>{
    Person.find((err, response)=>{
       res.json(response);
    });
 });

app.get('/person',(req,res)=>{
    console.log("Inside GET");
    res.render('person');
});

//faz alterações na tupla do DB que detem o parametro id passado
app.put('/peoplec/:id', (req, res)=>{
    Person.findByIdAndUpdate(req.params.id, req.body,(err, response)=>{
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       else res.json(response);
    });
 });

//deleta a tupla que detem o id passado
app.delete('/peopled/:id', function(req, res){
    Person.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });






//definindo nova rota para setar um novo COOKIE,maxAge é o prazo de validade dele, após esse tempo o cookie apaga
app.get('/cookie',(req,res)=>{
    res.cookie('name','express',{maxAge:360000}).send('cookie set'); //seta name = express
    console.log('Cookies: ', req.cookies); //retorna os cookies dessa rota
});

app.get('/', (req, res)=>{
   res.render('form');
});

app.set('view engine', 'pug');

app.set('views', './views');


app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});



app.listen(3000);