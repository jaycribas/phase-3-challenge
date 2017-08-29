const client = require('./client')
require('console.table')

const productList = section => {
  client.query(`
    SELECT name, section
    FROM products
    WHERE section = '${section}'
  `)
  .then( data => {
    console.table(data.rows)
    client.end()
  })
  .catch( err => console.log(err.message) )
}

module.exports = { productList }
