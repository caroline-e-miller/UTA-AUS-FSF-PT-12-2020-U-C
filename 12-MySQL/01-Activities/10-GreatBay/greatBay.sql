DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (flavor, price, quantity)
VALUES ("Creepy Doll circa 1895", 100.50);

INSERT INTO products (flavor, price, quantity)
VALUES ("Used Wedding Dress - bad vibes", 2000);
