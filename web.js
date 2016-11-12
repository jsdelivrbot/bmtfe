var gzippo = require('gzippo');
var express = require('express');

var morgan = require('morgan');
var logger = morgan('combined')

var app = express();

app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/build"));
app.listen(process.env.PORT || 5000);