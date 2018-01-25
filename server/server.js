var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;
var index = require('./routes/index.js');
//var thing = require('./routes/thing.js'); // serve back static files
app.use(require('morgan')('dev'));
var session = require('express-session');
var FileStore = require('session-file-store')(session);


// Parse post request (data becomes req.body)
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/thing', thing);
app.use(bodyParser.json());
// Static files
app.use(express.static('./server/public'));
// routes
//app.use('/', index);

// Sessions
app.use(session({
  name: 'server-session-cookie-id',
  secret: 'my express secret',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

app.use(function printSession(req, res, next) {
  console.log('req.session', req.session);
  console.log('req header referer', req.header('Referer'));
  return next();
});

// spinning up the server
app.listen(port, function () {
  console.log('server up on port: ', port);
}); // end spin up server