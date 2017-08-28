const router = require('express').Router()

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
}

router.get('/:day', function(req, res){
  let day = req.params.day.toLowerCase()
  if(daysOfWeek.hasOwnProperty(day)){
    res.status(200)
    res.send(daysOfWeek[day].toString())
  } else {
    res.status(400)
    res.send(`'${day}' is not a valid day!`)
  }
})

module.exports = router
