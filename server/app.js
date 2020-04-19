const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors')

const codesRoutes = require('./routes/codes')

const app = express()

// to get the body from request
app.use(bodyParser.json())
// CORS
app.use(cors())

// routes
app.use('/api/codes', codesRoutes)

app.listen(5000, () => {
  console.log('server started ...')
})
