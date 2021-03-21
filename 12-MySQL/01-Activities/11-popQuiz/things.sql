DROP DATABASE IF EXISTS thingsDB;

CREATE DATABASE thingsDB;

USE thingsDB;

CREATE TABLE things (
  id INT NOT NULL AUTO_INCREMENT,
  day VARCHAR(50) NULL,
  item VARCHAR(50) NULL,
  transport VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO things (day, item, transport)
VALUES ("Jolene", "Dolly Parton", "Country");

INSERT INTO things (day, item, transport)
VALUES ("Wildflowers", "Tom Petty", "Rock");

INSERT INTO things (day, item, transport)
VALUES ("Money for Nothing", "The Dire Straits", "Rock");