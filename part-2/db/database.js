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
  .catch( err => console.log(err.message) )
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
  .catch( err => console.log(err.message) )
}

module.exports = {
  productListBySection,
  listOrdersByShopperID
}
