var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');


app.set('views', path.join(__dirname,'api/views'));
app.set('view engine','jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'api/public')));


var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('RESTful API server started');