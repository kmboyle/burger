var orm = require('../config/orm');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result) {
            cb(result);
        });
    },
    update: function(colUpdate, condition, cb) {
        orm.update("burgers", colUpdate, condition, function(result) {
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(result) {
            cb(result);
        });
    }
};
//     * Export at the end of the `burger.js` file.
module.exports = burger;