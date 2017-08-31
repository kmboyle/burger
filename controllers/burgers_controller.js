var express = require('express');
var burger = require('../models/burger');

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        //creating an object to hold each object from the database
        var burgerObj = {
            burgerArray: data
        };
        //passing the object to the handlebars template
        res.render("index", burgerObj);
    });

});
router.post("/", function(req, res) {
    //calling the create method and passing the name from the user text field
    burger.create(
        "burger_name", req.body.newBurger,
        function() {
            res.redirect("/");
        });
});

router.put("/:id", function(req, res) {
    //updating the burger state to "devoured", passing the database id and the body.devoured as the column reference
    var condition = "id = " + req.params.id;
    burger.update(req.body.devoured, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    //same here, except passing only the id of the burger so it can be deleted from the database
    burger.delete(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;