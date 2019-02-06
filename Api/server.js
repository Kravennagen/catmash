require('dotenv').config();

var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    
var routes = require('./Api/Routes/CatMashRoutes'); //importing route
routes(app); //register the route
    
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
    
app.listen(port);
    
console.log('Catmash RESTful API server started on: ' + port);
    
module.exports = app;
