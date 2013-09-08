
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

var users = {
  1: {
    name: 'john',
    email: 'john@email.com'
  },
  2: {
    name: 'peter',
    email: 'peter@email.com'
  },
  3: {
    name: 'max',
    email: 'max@email.com'
  }
};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


app.get('/solution-one', function(req, res) {
    res.render('solution-one', {
        title: 'Express and Angular - solution-one',
        users: users  
    })
});

app.get('/solution-two', function(req, res){
    res.render('solution-two', {
        title: 'Express and Angular - solution-two'
    })
});

app.get('/solution-two/data', function(req, res) {
    res.json(users);
});

app.get('/solution-three', function(req, res) {
    res.render('solution-three', {
        title: 'Express and Angular - solution-three',
        users: users
    })
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


