const express = require('express')
const router = express.Router()
const authorController = require('../controller/authorController')


router.route('/addauthor').post(authorController.addAuthor)
router.route('/getallauthor').get(authorController.getAllAuthor)

module.exports = router