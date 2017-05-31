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
  commentModel.find({},function(err,docs)
  {
    console.log("HI");
    console.log(docs);
  });
  res.render('index', { title: 'Express' });
});

router.post('/newcomment',function(req, res) {
  /*var date = new Date(req.body.date);
  var newTask = req.body.task;
  var obj = {"date":date, "task":newTask, "done":false};
   //mongoose
  var task = new todo(obj);
  task.save(function(err){
    if(err) console.log(err);
    res.redirect('/');
  });*/
});

module.exports = router;
