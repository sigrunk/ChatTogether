var app = require('express')()
  , express = require("express")
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

/*app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});*/

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('createUser', function (data) {
    console.log(data);
  });
});