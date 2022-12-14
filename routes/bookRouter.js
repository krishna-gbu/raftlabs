const express = require('express')
const router = express.Router()
const bookController = require('../controller/bookController')


router.route('/').get(bookController.getAllBook)
router.route('/addbook').post(bookController.addBook)
router.route('/isbn/:isbn').get(bookController.getBookByIsbn)
router.route('/email/:email').get(bookController.getBookByEmail)
router.route('/sortmagabook').get(bookController.getsortmagabook)


module.exports = router