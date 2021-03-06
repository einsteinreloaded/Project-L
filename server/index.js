let express = require('express'),
  app = express(),
  port = process.env.PORT || 8900;
let http = require('http');
let fs = require("fs");

let AuthFns = require("./authentication.js");

const dbUrl = "http://localhost:8900/users.json";
const dbDirectory = "db";
const salt = 1234324235;


app.use(express.static('db'));

app.get('/', function (req, res) {
let credentials={
    username: req.query.uname,
    password: req.query.pword
}
res.setHeader("Access-Control-Allow-Origin", "*");
  AuthFns.getUsers(dbUrl).then((response)=>{
    res.send(AuthFns.authenticateUser(response.data,credentials,salt));
  }).catch(err=>{
      res.send(AuthFns.generateGuestUserCredential(salt));
  });
});

app.listen(port,function(){
console.log('todo list RESTful API server started on: ' + port);
});

