#!/usr/bin/env node

const command = process.argv[2]
const { productList } = require('./db/database')

switch (command) {
  case 'product-list':
    let section = process.argv[3]
    productList(section)
    break
  case 'shopper-orders':
    console.log('shopper-orders will go here')
    break
  case 'real-shoppers':
    console.log('real-shoppers will go here')
    break
  default:
    console.log('Hmm, something went wrong, try one of these commands: "product-list", "shopper-orders" or "real-shoppers"')
}
