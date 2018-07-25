var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//new code:
var bodyParser = require('body-parser'); // new
var session = require('express-session'); // new
////



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
///new rout:
var auth = require('./routes/auth'); // new
///
var app = express();

//new code:
app.use(bodyParser.json()); //new
app.use(bodyParser.urlencoded()); // new
app.use(session({secret: 'anything'})); //new
require('./config/passport')(app); //new
///

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
///new route:
app.use('/auth', auth); // new




module.exports = app;
