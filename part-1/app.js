const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const daysRouter = require('./routes/days')
const concatRouter = require('./routes/concat')

const bodyParserJson = bodyParser.json()

app.use('/api/days', daysRouter)
app.use('/api/array/concat', bodyParserJson, concatRouter)

app.listen(3000, function(){
  console.log('Listening on port 3000')
})
