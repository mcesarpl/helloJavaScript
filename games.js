let express = require('express');
let router = express.Router();
let games = [
    {id:101, name:"Street Fighter", year:1998, rating:9.1},
    {id:102, name:"Grand Theft Auto", year:1997, rating:9.0},
    {id:103, name:"Donkey Kong", year:1981, rating:9.2},
    {id:104, name:"Metroid", year:1986, rating:9.1}
];

router.get('/',(req,res)=>{
    res.json(games);
});

router.get('/:id([0-9]{3,})',(req,res)=>{
    let currGame=games.filter((game)=>{
        if(game.id==req.params.id){
            return true;
        }
    });
    if(currGame.length==1){
        res.json(currGame[0])
    }else{
        res.status(404);
        res.json({message:"Not Found"});
    }
});

router.post('/',(req, res)=>{
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
       
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       let newId = games[games.length-1].id+1;
       games.push({
          id: newId,
          name: req.body.name,
          year: req.body.year,
          rating: req.body.rating
       });
       res.json({message: "New game created.", location: "/games/" + newId});
    }
 });

 router.put('/:id', (req, res)=>{
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
       !req.params.id.toString().match(/^[0-9]{3,}$/g)){
       
       res.status(400);
       res.json({message: "Bad Request1"});
    } else {
       //Gets us the index of movie with given id.
       var updateIndex = games.map((game)=>{
          return game.id;
       }).indexOf(parseInt(req.params.id));
       
       if(updateIndex === -1){
          //Movie not found, create new
          games.push({
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          });
          res.json({message: "New game created.", location: "/games/" + req.params.id});
       } else {
          //Update existing movie
          games[updateIndex] = {
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          };
          res.json({message: "Game id " + req.params.id + " updated.", 
             location: "/games/" + req.params.id});
       }
    }
 });

//Routes will go here
module.exports = router;

