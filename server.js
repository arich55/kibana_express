var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('Hello World');
});


app.use(express.static(__dirname + '/'));

app.use('/static', express.static(__dirname + '/'));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});