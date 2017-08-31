var connection = require('./connection');

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        // var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "');";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, colUpdate, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    }

}

//    * Export the ORM object in `module.exports`.

module.exports = orm;