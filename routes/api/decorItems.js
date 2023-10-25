const express = require('express')
const router = express.Router()
const decorItemCtrl = require('../../controllers/api/decorItems')

// GET /api/decorItems
router.get('/', decorItemCtrl.index)

module.exports = router