var mysql = require('mysql');
var connetion;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "438278kmb",
        database: "burgers_db"
    });
};

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;