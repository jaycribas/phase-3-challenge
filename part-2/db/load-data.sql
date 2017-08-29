COPY products (name, price, section) FROM '/Users/jaycribas/desktop/projects/phase-3-challenge/part-2/db/data/grocery.csv' DELIMITER ',' CSV header;

INSERT INTO shoppers (name)
VALUES ('Robyn'), ('Bjork'), ('Amy'), ('Shirley'), ('Thom');

INSERT INTO orders (shopper_id)
VALUES ('1'), ('2'), ('3'), ('2'), ('5');

INSERT INTO order_details (order_id, product_id) VALUES
  (1,5),
  (1,21),
  (1,30),
  (1,2),
  (1,17),
  (2,25),
  (2,24),
  (2,19),
  (2,3),
  (2,33),
  (2,41),
  (2,1),
  (3,10),
  (3,7),
  (3,40),
  (3,32),
  (3,29),
  (4,2),
  (4,15),
  (4,23),
  (4,36),
  (4,38),
  (4,4),
  (4,14),
  (4,12),
  (5,4),
  (5,34),
  (5,39),
  (5,36),
  (5,25);
