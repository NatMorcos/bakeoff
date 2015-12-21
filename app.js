var express = require('express')
  , http = require('http')
  , path = require('path')
  , Primus = require('primus.io')
  , cors = require('cors')
  , functions = require('./functions');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8080);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


app.get('/', function(req, res){
  res.sendfile(path.join(__dirname, 'public', 'index.html'));
});

// This should be the post of the results
app.post('/vote', cors(),  functions.vote);
app.post('/cookie', cors(), functions.addCookie);
app.get('/cookie', cors(), functions.listCookies);

var server = http.createServer(app);
var primus = new Primus(server, {
      transformer: 'websockets', 
      parser: 'JSON' 
    });
require('./primus_init')(primus);

server.listen(app.get('port'), function(){
  console.log("Hey ho! We're up and running on port " + app.get('port'));
});
