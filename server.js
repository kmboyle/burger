var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('./config/connection');
var exphbs = require('express-handlebars');

var app = express();

var PORT = 3000;

app.use(bodyParser.urlencoded({ extneded: false }));

app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) {
            throw err;
        }
        res.render("index", { burgerArray: result });
    })

});


app.listen(PORT);
console.log("Server listening on port " + PORT);