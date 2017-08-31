var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('./config/connection');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');
var path = require('path');
var app = express();
var routes = require('./controllers/burgers_controller');

app.use(express.static('public'));


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');



Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});

app.use("/", routes);



app.listen(PORT, function() {

    console.log("Server listening on port " + PORT);
});