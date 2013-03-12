/*Þetta er Chat serverinn. Síðan setjum við inn folder 
sem á að heita public og í honum á að vera angular kóðinn*/
var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8000;

/* Sett inn af SIK samkv. fyrirlestri 12.03. SIK */    
var glocalData = {
  // Gott að byrja með að setja inn harðkóðuð gögn
  boards: [{ 
    id: 1,
    name: 'FirstBoard',
    users: ['user1', 'user2'],
    message: ['blabla', 'bla', 'bla']}
  ]
};

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

/* Hér er verið að stilla af þennan express server */ 
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

app.listen(port);

app.get('/board/board.id', function (req, res) {
  // TODO: þetta er serverside kóðinn
});

// Búa til nýtt borð
app.post(....);

/* bæta við fleirri aðgerðum sem eru að vinna með gögn.
 bæði að skrifa og skila. */

