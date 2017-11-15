var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var knex = require('./db/knex');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/ideas', function(req, res) {
  knex('ideas').select()
  .then(function(data){
    res.send(data);
  });
});

app.post('/ideas', function(req, res) {
  knex('ideas').insert(req.body)
  .then(function(id){
    console.log(req.body, "fun")
    res.redirect('/');
  });
}); 

app.post('/ideasDel', function(req,res) {
  knex("ideas").where("idea","req.body").del().then(function(id){
    console.log(req.body, "bun")
    res.redirect('/');
  });
  console.log(req.body, db)
})

app.listen(3000, function(){
  console.log('Listening on Port 3000');
});