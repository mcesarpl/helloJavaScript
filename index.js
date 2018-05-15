let express = require('express');
let app = express();

//adcionando uma função de subrotina para toda chamada ao servidor na rota /things
app.use('/things',(req,res,next)=>{
    console.log("A request for things received at" + Date.now());
    next();
});

//app.use tem de vir antes do listen
let things = require('./things.js');

//criando novo js para rota things
app.use('/things',things);

//criando diretorio estatico para uso de arquivos
app.use(express.static('public'));

app.listen(3000,()=>{
    console.log("Server is listening on port : " + 3000)
});

app.get('/', (req,res)=>{
    res.send("<h1>Hello World!<h1>");
});

app.get('/livros2',(req,res)=>{
    res.send("<ul><li>HtmL Para Iniciantes</li><li>Dasgupta</li><li>Halliday</li><ul>");
});

app.post('/livros2',(req,res)=>{
    res.send("You just called the post method at '/livros2'\n");
});

app.get('/first_template',(req,res)=>{
    res.render('first_view');
});

app.get('/first_templateht',(req,res)=>{
    res.sendfile('HelloHtml.html');
});

app.get('/dynamic_view',(req,res)=>{
    res.render('dynamic',{
        name: "TutorialsPoint",
        url: "http://www.google.com"
    });
});
//usando if else com pug, arquivo dynamic2
app.get('/dynamic_view2',(req,res)=>{
    res.render('dynamic2',{
        user : {name: "Tanus", age : "20000"}
    });
});
//usando include com pug, incluindo header e footer
app.get('/components',(req,res)=>{
    res.render('content');
});

app.get('/:id',(req,res)=>{
    res.send('The id you specified is ' + req.params.id);
});

//Other routes here
app.get('*',(req,res)=>{
    res.send("Sorry, this is an invalid URL.\n");
});

//incluindo body-parser no index.js
let bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({extended: false}));

//To parse json data
app.use(bodyParser.json());

//Using Pug as a templating endine for Express
app.set('view engine','pug');
app.set('views','./views');

