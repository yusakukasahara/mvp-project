DROP DATABASE IF EXISTS cohort;

CREATE DATABASE cohort;

USE cohort;

CREATE TABLE profiles (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  hometown varchar(255) NOT NULL,
  previously varchar(255) NOT NULL,
  interests varchar(255) NOT NULL,
  experience varchar(255) NOT NULL,
  fact1 varchar(255) NOT NULL,
  fact2 varchar(255) NOT NULL,
  fact3 varchar(255) NOT NULL,
  photourl varchar(255) NOT NULL
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
