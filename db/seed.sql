CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name) VALUES ("BBQ Bacon Burger");
INSERT INTO burgers (burger_name) VALUES ("Bacon Burger");
INSERT INTO burgers (burger_name) VALUES ("Cheese Burger");
INSERT INTO burgers (burger_name) VALUES ("Best Burger");