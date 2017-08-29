const router = require('express').Router()

router.post('/', function(req, res){
  let { array1, array2 } = req.body
  array1 = JSON.parse(array1)
  array2 = JSON.parse(array2)
  if(Array.isArray(array1) && Array.isArray(array2))
    res.json({ "result": array1.concat(array2) })
  else
    res.status(400).json({ "error": "Input data should be of type Array." })
})

module.exports = router
