var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var config = require('../public/javascripts/dbconfig.js');
var router = express.Router();


var commentSchema =  mongoose.Schema(
  {
    date : {type: Date, default: Date.now},
    comment : String,
    index : Number
  }
);
var commentModel = mongoose.model("comment",commentSchema,'testCollection');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '공동묘지' });
});

router.post('/newcomment',function(req, res,next) {

  var comment = req.body.comment;
  var idx = req.body.index;

  var obj = {"comment":comment, "index":idx};
  var addcomment = new commentModel(obj);
  addcomment.save(function(err){
    if(err) console.log(err);
    //res.redirect('/');
  });
  //res.json(obj);
  res.send(addcomment);
});

router.post('/loadcomment',function(req, res,next) {

  var idx = req.body.index;
  commentModel.find({"index":idx},function(err,docs)
  {
    res.send(docs);
  });
});
module.exports = router;
