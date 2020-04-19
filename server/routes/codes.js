const express = require('express')

const router = express.Router(),
  dummy = require('../dummy')

const DUMMY_DATA = dummy.CODES

// get all codes
router.get('/', (req, res, next) => {
  const codes = DUMMY_DATA

  res.json({
    codes
  })
})

module.exports = router
