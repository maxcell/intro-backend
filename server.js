const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000


const router = require('./routes')
const models = require('./models')
const app = express()


models.db.sync()
.then(() => {
  app.listen(port, function(){
    console.log('Application is listening on')
  })
})


// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(morgan('dev'))

app.use('/', router)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Whoops!')
})