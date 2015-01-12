/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , indexRoute = require('./routes/index.js');

//register event


var app = express();
// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.set('photos', __dirname + '/public/photos');
    app.use(express.errorHandler());
}
if ('production' == app.get('env')) {
    app.set('photos', '/mounted-volume/photos');
}

app.get('/', indexRoute.index);
app.post('/', indexRoute.postdata);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

