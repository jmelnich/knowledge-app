DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS courses;

CREATE TABLE users
(
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  email       VARCHAR(255) NOT NULL UNIQUE,
  first_name   VARCHAR(255) NOT NULL,
  last_name    VARCHAR(255) NOT NULL,
   password    VARCHAR(255) NOT NULL
);

CREATE TABLE courses
(
  user_id INTEGER,
  course_id VARCHAR(255),
  status INTEGER,
  category VARCHAR (255),
  title VARCHAR (255),
  level VARCHAR (255)
);
