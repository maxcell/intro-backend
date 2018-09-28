const express = require('express')

const router = express.Router()

const Dog = require('../models').Dog

router.get('/corgis', (req,res,next) => {
  res.json({
    hello: "world"
  })
  
  // console.log(Dog)
  // Dog.findAll()
  // .then(dogs => {
  //   console.log(dogs)
  //   res.json(dogs)
  // })
})

module.exports = router