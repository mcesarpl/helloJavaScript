let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send('GET route on things.');
});

router.post('/',(req,res)=>{
    res.send('POST route on things.');
});

router.get('/portugues',(req,res)=>{
    res.send('<ul><li>Gramática</li><li>Literatura</li><li>Redação</li><ul>');
});
//criando restrições para o parametro de requisição id, pode ser um numero de 0-9 e ter tamanho 3
router.get('/:id([0-9]{3})',(req,res)=>{
    res.send('id : ' + req.params.id);
});

//export this router to use in our index.js
module.exports = router;
