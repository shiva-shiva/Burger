
var express = require('express');
var router = express.Router()
var burger = require('../models/burger')

router.get('/', function(req, res) {
    res.render('index');
  });

router.get('/index', function(req , res){
  burger.selectAll((data)=>{
     var hbsObject = { burgers: data };
     console.log(hbsObject)
     res.render('index', hbsObject);
     });
  });
   
 router.post('./api/burger/create', function(req , res){
   burger.insertOne(req.body.burger_name, function(){
     res.redirect('./index')
   })
 })

 router.post('./api/burger/eat/:id', function(req , res){
   burger.updateOne(req.params.id, function(){
     res.redirect('./index')
   })
 })

module.exports = router;