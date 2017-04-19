var express = require('express'),
  app = express(),
  port = process.env.PORT || 8900;
var http = require('http');
var fs = require("fs");

var AuthFns = require("./authentication.js");

const dbUrl = "http://localhost:8900/users.json";
const dbDirectory = "db";
const salt = 1234324235;


app.use(express.static('db'));

app.get('/', function (req, res) {
var credentials={
    username: req.query.uname,
    password: req.query.pword
}
  AuthFns.getUsers(dbUrl).then((response)=>{
    res.send(AuthFns.authenticateUser(response.data,credentials,salt));
  }).catch(err=>{
      res.send(err);
  });
});

app.listen(port,function(){
console.log('todo list RESTful API server started on: ' + port);
});

