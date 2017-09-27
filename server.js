var express = require('express');
var app = express();
require('dotenv').config();
var getTrap = require("./controllers/getTrap").getTrap;

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '610f9c02b25a48e7a45f84d24748ad6d',
  secret: process.env.SECRET
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req,res){
    getTrap(spotify , function(data){
        res.send(data);
    });

});

app.listen(3001);
