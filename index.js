var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

console.log('Server Node/express démarré');

io.on('connection', function(socket){
  socket.on('name', function(name){
  	console.log(name + 'says hello !');
    io.emit('name', name);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});



/*
const express = require('express');
const socketio = require('socket.io');

var app = express(); 
var server = app.listen(8080);
var io = socketio(server); 

// app.use(express.static('static'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

console.log('Server Node/express démarré');

io.on('connection', function(socket){
  socket.on('name', function(name){
  	console.log(name + 'says hello !');
    io.emit('name', name);
  });
});
*/