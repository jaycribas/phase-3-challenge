const expect = require('chai').expect
const {
    productListBySection,
    listOrdersByShopperID,
    listRealShoppers
  } = require('../db/database')

describe('queries', () => {

  context('productListBySection', () => {
    it('should return an array of products that match the section queried', () => {
      let section = 'dairy'
      productListBySection(section)
      .then( productResults => {
        le.table(productResults.rows)
      })
    })
  })

})
