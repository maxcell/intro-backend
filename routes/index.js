const express = require('express')

const router = express.Router()

router.get('/corgi', (req,res,next) => {
  res.json({
    hello: "world"
  })
})

module.exports = router