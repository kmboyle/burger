
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL, 
    devoured BOOLEAN NOT NULL DEFAULT 0, 
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(id)
    );

