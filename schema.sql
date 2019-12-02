DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products`
(
    product VARCHAR
(100) NOT NULL,
    department VARCHAR
(100) NOT NULL,
    price FLOAT NOT NULL,
    stock_quantity INT NOT NULL,
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW
()
    ON
UPDATE NOW(),
    createdAt TIMESTAMP
NOT NULL,
    id INT AUTO_INCREMENT NOT NULL,
)
insert into products
    (product, department, price, stock_quantity)
VALUES
    ("fuzzy socks", "clothing", 3.99, 10),
    ("sweater", "clothing", 12.99, 5),
    ("TV", "electronics", 300, 0),
    ("DVD", "entertainment", 2.99, 10),
    ("Iphone", "electronics", 500, 2),
    ("Book", "entertainment", 3.99, 10)