// Load http module.
var http = require('http');
var path = require('path');
// Load express module.
var express = require('express');
// Pour affichage de log
var morgan = require('morgan')
var bodyParser  = require('body-parser');
var pug = require('pug');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/data.dbf');

var heredoc = require('heredoc');
 
// Initialize app object.
var app = new express();

// Log
app.use(morgan(':date :method :url :http-version :response-time :status :remote-addr :referrer'));

// Decode des POST json et HTML
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use app.set to add the view engine.
// Ass app is an express object, it has a view engine property.
app.set('view engine', 'pug');
  
// Set path to views.
app.set('views', './views');
app.locals.basedir = path.join(__dirname, '.');

// Basic routing.
app.get('/', function(req, res) {
    // res.send is changed to result.render in order to load the correct view.
    res.render('index');
});

// My Routing
// Basic routing.
app.get('/about', function(req, res) {
    // res.send is changed to result.render in order to load the correct view.
    res.render('about');
});
 
// Create server and listen on port 3030.
var TCP_PORT = 3030;
http.createServer(app).listen(TCP_PORT, '0.0.0.0', function() {
    console.log('Server running Port = '+TCP_PORT+'...');
});
