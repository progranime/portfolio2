const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors')

const codesRoutes = require('./routes/codes'),
  portfoliosRoutes = require('./routes/portfolios')

const app = express()

// to get the body from request
app.use(bodyParser.json())
// CORS
app.use(cors())

// routes
app.use('/api/codes', codesRoutes)
app.use('/api/portfolios', portfoliosRoutes)

app.listen(5000, () => {
  console.log('server started ...')
})
