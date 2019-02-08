require('dotenv').config();
/*const https = require("https"),
fs = require("fs");*/

var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    next();
}
    
/*const options = {
    key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
    cert: fs.readFileSync("/srv/www/keys/chain.pem")
  };*/
app.use(allowCrossDomain)
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
    
var routes = require('./Routes/CatMashRoutes'); //importing route
routes(app); //register the route
    
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
    
app.listen(port);
    
console.log('Catmash RESTful API server started on: ' + port);
    
module.exports = app;
//https.createServer(options, app).listen(8080);
