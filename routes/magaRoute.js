const express = require('express')
const router = express.Router()
const magaController = require('../controller/magaController')


router.route('/').get(magaController.getAllMaga)
router.route('/isbn/:isbn').get(magaController.getMagaByIsbn)
router.route('/addmaga').post(magaController.addMaga)
router.route('/email/:email').get(magaController.getMagaByEmail)

module.exports = router