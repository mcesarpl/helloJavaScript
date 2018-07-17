const
    router = require('express').Router();
    let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_user', { useNewUrlParser: true });


let userSchema = mongoose.Schema({
    username : String,
    password : String,
    grant_type : String,
    client_id : String,
    client_secret : String
});
    
let User = mongoose.model("User", userSchema);

let saveInBanc = (userInfo,res)=>{ //recebe req.body
    if(!userInfo.username || !userInfo.password || !userInfo.grant_type){
        res.json({message: "Sorry, you provided invalid username, password or granttype", type: "error"});
    }else{
        User.findOne({username : userInfo.username},(err,response)=>{
            if(err) {
                res.json({message: "Sorry, a database could not be used. Try again.", type: "error"});
            }else{
                if((!(response===[]))&&(response!=null)){
                    //console.log(response);
                    res.json({message:"Sorry, you provided a already existent username.",type:"error"});
                }else{
                    let newUser = new User({
                        username : userInfo.username,
                        password : userInfo.password,
                        grant_type : userInfo.grant_type,
                        client_id : userInfo.client_id,
                        client_secret : userInfo.client_secret
                     });
            
                     newUser.save((err, User)=>{
                        if(err){
                            console.log(err);
                            res.json({message: "Database error", type: "error"});
                        }
                        else{
                            res.json({message: "New User added!", type: "success", user : userInfo});
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