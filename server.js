var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('./config/connection');
var exphbs = require('express-handlebars');
var Handlebars = require('handlebars');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));



Handlebars.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, result) {
        if (err) {
            throw err;
        }
        res.render("index", { burgerArray: result });
    })

});
app.post("/", function(req, res) {

    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.newBurger], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});
app.put("/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured=true WHERE id= (?) ", req.params.id, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");


    })
})

app.listen(PORT, function() {

    console.log("Server listening on port " + PORT);
});