const
    router = require('express').Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

//auth with google
router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out')
});

module.exports = router;