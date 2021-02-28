
var express = require('express');
var router = express.Router()
var burger = require('../models/burger')
/*router.get('/', async function(req, res) {
      res.redirect('/burgers')
  });*/

router.get('/', function(req , res){
  burger.selectAll((data)=>{
     var hbsObject = { burgers: data };
     console.log(hbsObject)
     res.render('index', hbsObject);
     });
  });
   
 router.post('/burger/create', async function(req , res){
   burger.insertOne(req.body.burger_name, function(){
     console.log("heeeelll")
     res.redirect('/')
   });
 });


 router.post('/burger/eat/:id', function(req , res){
   burger.updateOne(req.params.id, function(){
    res.redirect('/')
   });
 });

module.exports = router;