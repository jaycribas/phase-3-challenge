const client = require('./client')
require('console.table')

const productListBySection = section => {
  client.query(`
    SELECT name, section
    FROM products
    WHERE section = '${section}'
  `)
  .then( productResults => {
    console.table(productResults.rows)
    client.end()
  })
  .catch( err => console.error(err.message) )
}

const listOrdersByShopperID = id => {
  client.query(`
    SELECT order_id, SUM(price)
    FROM order_details
      JOIN products
        ON products.id = order_details.product_id
      JOIN orders
        ON orders.id = order_details.order_id
    WHERE shopper_id = ${id}
    GROUP BY order_id
    ORDER BY order_id
  `)
  .then( orderResults => {
    console.table(orderResults.rows)
    client.end()
  })
  .catch( err => console.error(err.message) )
}

const listRealShoppers = () => {
  client.query(`
    SELECT shoppers.name, count(shopper_id)
    FROM orders
    LEFT OUTER JOIN shoppers
      ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.id
  `)
  .then( realShoppersResults => {
    console.table(realShoppersResults.rows)
    client.end()
  })
  .catch( err => console.error(err.message) )
}

module.exports = {
  productListBySection,
  listOrdersByShopperID,
  listRealShoppers
}
