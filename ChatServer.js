var app = require('express')()
  , express = require("express")
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

var globalData = {
    rooms: [ {name: "FirstRoom",
              users: ["dabs"],
              messages: [] } ],
    userNames: {}
};

server.listen(8080);



/* Til að servera statísku contenti */
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

io.sockets.on('connection', function (socket) {
    socket.on('createUser', function (data) {
        var username = data.user;
        var found = false;
        for(var i=0; i<globalData.userNames.length; i++) {
            if (globalData.userNames[i] == data.user){
                found = true;
                break;
            }
        }

        if( found ){
            socket.emit('validateUser', false);
            console.log('Username ' + data.user + ' exists!');
        }
        else{

            globalData.userNames[data.user]
            socket.emit('validateUser', true);
            console.log('Added ' + data.user + ' to the mix');
        }
            
    });
});

