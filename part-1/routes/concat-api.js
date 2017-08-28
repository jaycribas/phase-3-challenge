const concatApi = require('express').Router()

concatApi.get('/', function(req, res){
  res.send('Hello World!')
})

module.exports = concatApi
