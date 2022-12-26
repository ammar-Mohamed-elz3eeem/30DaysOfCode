CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	fname VARCHAR(50) NOT NULL,
	lname VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	utype ENUM('regular','investor','business','admin') DEFAULT 'regular',
	gender ENUM('M','F'),
	PRIMARY KEY (id)
);

INSERT INTO users VALUES(NULL, 'mohamed', 'farahat', 'farahat@wpkama.com', 'investor', 'M'), (NULL, 'farha', 'alaa', 'farha@wpkama.com', 'business', 'F')