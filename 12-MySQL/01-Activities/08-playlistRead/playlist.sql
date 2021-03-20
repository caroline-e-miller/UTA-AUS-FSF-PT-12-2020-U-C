DROP DATABASE IF EXISTS playlist_DB;

CREATE DATABASE playlist_DB;

USE playlist_DB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  song VARCHAR(45) NULL,
  artist VARCHAR(15) NULL,
  genre VARCHAR(15) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (song, artist, genre)
VALUES ("Jolene", "Dolly Parton", "Country");

INSERT INTO songs (song, artist, genre)
VALUES ("Wildflowers", "Tom Petty", "Rock");

INSERT INTO songs (song, artist, genre)
VALUES ("Money for Nothing", "The Dire Straits", "Rock");