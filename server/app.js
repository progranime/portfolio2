const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path')

const codesRoutes = require('./routes/codes'),
  portfoliosRoutes = require('./routes/portfolios')

const app = express()

// to get the body from request
app.use(bodyParser.json())
app.use(express.static(path.join('public')))

// CORS
app.use(cors())

// routes
app.use('/api/codes', codesRoutes)
app.use('/api/portfolios', portfoliosRoutes)

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT || 5000, () => {
  console.log('server started ...')
})
