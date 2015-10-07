var express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  db = require('./config/db.js'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  routes = require('./routes/index'),
  firearms = require('./routes/firearms'),
  airguns = require('./routes/airguns'),
  movies = require('./routes/movies'),
  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

db.setup().then(function() {
    console.log('Database Connected.');
}, function(error) {
    console.log(error);
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register routes
app.use('/', routes);
app.use('/v1/firearms', firearms);
app.use('/v1/airguns', airguns);
app.use('/v1/movies', movies);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
