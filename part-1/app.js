const express = require('express')
const app = express()
const daysApi = require('./routes/days-api')
const concatApi = require('./routes/concat-api')

app.use('/api/days', daysApi)
app.use('/api/array/concat', concatApi)

app.listen(3000, function(){
  console.log('Listening on port 3000')
})
