
var express = require('express');
var router = express.Router()
var burger = require('../models/burger')

router.get('/', function(req, res) {
    res.render('index');
  });

router.get('/index', async function(req , res){
  burger.selectAll((data)=>{
     var hbsObject = { burgers: data };
     console.log(hbsObject)
     res.render('index', hbsObject);
     });
  });
   

module.exports = router;