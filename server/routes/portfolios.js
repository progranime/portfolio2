const express = require('express')

const router = express.Router(),
  dummy = require('../dummy')

const DUMMY_DATA = dummy.PORTFOLIOS

router.get('/', (req, res, next) => {
  res.json({
    portfolios: DUMMY_DATA
  })
})

module.exports = router
