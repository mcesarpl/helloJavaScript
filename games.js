let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
/*let games = [
    {id:101, name:"Street Fighter", year:1998, rating:9.1},
    {id:102, name:"Grand Theft Auto", year:1997, rating:9.0},
    {id:103, name:"Donkey Kong", year:1981, rating:9.2},
    {id:104, name:"Metroid", year:1986, rating:9.1}
];*/

mongoose.connect('mongodb://localhost:27017/db_games');

let gameSchema = mongoose.Schema({
    id: Number,
    name : String,
    year: Number,
    rating: Number
});

let Game = mongoose.model("Game",gameSchema);


let saveInBanc = (gameInfo,res)=>{ //recebe req.body
    if(!gameInfo.id||!gameInfo.name || !gameInfo.year || !gameInfo.rating){
        res.json({message: "Sorry, you provided worng info", type: "error"});
    }else{
        Game.findOne({id: gameInfo.id},(err,response)=>{
            if(err) {
                res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
            }else{
                if(!(response==[])){
                    res.json({message:"Sorry, you provided a already existent id",type:"error"});
                }else{
                    let newGame = new Game({
                        id: gameInfo.id,
                        name: gameInfo.name,
                        year: gameInfo.year,
                        rating: gameInfo.rating
                     });
            
                     newGame.save((err, Game)=>{
                        if(err){
                          res.json({message: "Database error", type: "error"});
                        }
                        else{
                            res.json({message: "New game added!", type: "success", game: gameInfo});
                        }   
                    });
                }
               
            }
        });
    }
}

//função para salvar game no banco
/*
let saveInBanc = (gameInfo,res)=>{ //recebe req.body
    if(!gameInfo.id||!gameInfo.name || !gameInfo.year || !gameInfo.rating){
       res.json({message: "Sorry, you provided worng info", type: "error"});
    } else {
        let newGame = new Game({
            id: gameInfo.id,
            name: gameInfo.name,
            year: gameInfo.year,
            rating: gameInfo.rating
         });

         newGame.save((err, Game)=>{
            if(err){
              res.json({message: "Database error", type: "error"});
            }
            else{
                res.json({message: "New game added!", type: "success", game: gameInfo});
            }   
        });
    }
}
*/

//retorna todos os jogos 
router.get('/',(req,res)=>{
    Game.find((err, response)=>{
        if(err) {
            console.log(err)
        } else {
            console.log(response)
            res.json(response);
        }
     });
});

//retorna somento o jogo com o id especifico
router.get('/:id([0-9]{3,})',(req,res)=>{
    Game.findOne({id: req.params.id},(err,response)=>{
        if(err){
            res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
        }else{
            if(response!=null){
                res.json(response);

            }else{
                res.json({message:"This id dos not exist. Try another."});
            }

        }
    });

});

//cria novo game para e adiciona no array
router.post('/',(req, res)=>{
    saveInBanc(req.body,res);
 });

//se existir o id passado, altera o game no array, se não cria um novo game 
// router.put('/:id([0-9]{3,})', (req, res)=>{
//     //Check if all fields are provided and are valid:
//     if(!req.body.name ||
//        !req.body.year.toString().match(/^[0-9]{4}$/g) ||
//        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
//        !req.params.id.toString().match(/^[0-9]{3,}$/g)){
       
//        res.status(400);
//        res.json({message: "Bad Request"});
//     } else {
//        //Gets us the index of movie with given id.
//        var updateIndex = games.map((game)=>{
//           return game.id;
//        }).indexOf(parseInt(req.params.id));
       
//        if(updateIndex === -1){
//           //Movie not found, create new
//           games.push({
//              id: req.params.id,
//              name: req.body.name,
//              year: req.body.year,
//              rating: req.body.rating
//           });
//           res.json({message: "New game created.", location: "/games/" + req.params.id});
//        } else {
//           //Update existing movie
//           games[updateIndex] = {
//              id: req.params.id,
//              name: req.body.name,
//              year: req.body.year,
//              rating: req.body.rating
//           };
//           res.json({message: "Game id " + req.params.id + " updated.", 
//              location: "/games/" + req.params.id});
//        }
//     }
// });

router.put('/:id([0-9]{3,})', (req, res)=>{
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
       !req.params.id.toString().match(/^[0-9]{3,}$/g)){
       
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
        console.log(req.params.id);
        Game.findOneAndUpdate({id: req.params.id},req.body,{new:true},(err,response)=>{
            if(err){
                res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
            }else{
                res.json(response);
                }
    
            });
    }
});

// //remove o objeto passado no id
// router.delete('/:id([0-9]{3,})', (req, res)=>{
//     let removeIndex = games.map((game)=>{
//        return game.id;
//     }).indexOf(parseInt(req.params.id));
    
//     if(removeIndex === -1){
//        res.json({message: "Not found"});
//     } else {
//        games.splice(removeIndex, 1);
//        res.send({message: "Game id " + req.params.id + " removed."});
//     }
//  });

//remove o objeto passado no id
router.delete('/:id([0-9]{3,})', (req, res)=>{
    Game.findOneAndRemove({id : req.params.id},(err,response)=>{
        if(err){
            res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
        }else{
            res.json({message: "Game removed."});
        }
    });
 });

//Routes will go here
module.exports = router;

