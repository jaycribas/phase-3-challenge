DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(12,2),
  section VARCHAR(15)
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(70)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  shopper_id INT REFERENCES shoppers
);

DROP TABLE IF EXISTS order_details;
CREATE TABLE order_details(
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders,
  product_id INT REFERENCES products
);
