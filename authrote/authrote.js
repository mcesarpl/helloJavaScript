const
    router = require('express').Router();
    let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_user');


let userSchema = mongoose.Schema({
    name : String,
    password : String
});
    
let User = mongoose.model("User", userSchema);

let saveInBanc = (userInfo,res)=>{ //recebe req.body
    if(!userInfo.name || !userInfo.password){
        res.json({message: "Sorry, you provided invalid name or password.", type: "error"});
    }else{
        User.findOne({name : userInfo.id},(err,response)=>{
            if(err) {
                res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
            }else{
                if((!(response===[]))&&(response!=null)){
                    //console.log(response);
                    res.json({message:"Sorry, you provided a already existent name.",type:"error"});
                }else{
                    let newUser = new User({
                        name : userInfo.name,
                        password : userInfo.password
                     });
            
                     newUser.save((err, User)=>{
                        if(err){
                            console.log(err);
                            res.json({message: "Database error", type: "error"});
                        }
                        else{
                            res.json({message: "New User added!", type: "success", game: userInfo});
                            console.log("Entry in POST : \nNew User added : " + userInfo.name);
                        }   
                    });
                }
               
            }
        });
    }
}
// //auth login
// router.get('/login',(req,res)=>{
//     res.render('login');
// });

// //auth with google
// router.get('/logout',(req,res)=>{
//     //handle with passport
//     res.send('logging out')
// });

router.get('/',(req,res)=>{
    User.find((err, response)=>{
        if(err) {
            console.log(err)
        } else {
            console.log("Entry in GET : \n" + response);
            res.json(response);
        }
     });
});


router.post('/newuser',(req, res)=>{
    console.log("New request at /auth/newuser");
    console.log(req.body);
    saveInBanc(req.body,res);
});

//Routes will go here
module.exports = router;