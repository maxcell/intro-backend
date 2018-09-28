const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000


const router = require('./routes')
const app = express()



app.listen(port, function(){
  console.log('Application is listening on')
})

app.use('/', router)