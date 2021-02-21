DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE stock (
  id INT AUTO_INCREMENT NOT NULL,
  item VARCHAR(255) NOT NULL,
  min_cost FLOAT(2) NOT NULL,
  curr_bid FLOAT(2),
  ends_in INT NOT NULL,
  img VARCHAR(255),
  PRIMARY KEY (id)
);

