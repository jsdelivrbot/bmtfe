var gzippo = require('gzippo');
var express = require('express');

//var morgan = require('morgan');
//var logger = morgan('combined')

//var location = "" + __dirname + "\\dist\\";

var location = "" + __dirname;
    
//console.log(location);

var app = express();
//app.use(morgan('combined'));
app.use(gzippo.staticGzip(location));


//app.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
//});

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname } );
});

app.listen(process.env.PORT || 5000);