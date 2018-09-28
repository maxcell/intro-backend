const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

var port = process.env.PORT || 3000

app.listen(port, function(){
  console.log('Application is listening on')
})