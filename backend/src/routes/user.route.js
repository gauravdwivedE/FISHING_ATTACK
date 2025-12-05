const router = require('express').Router()
const {inserUser, selectUser} = require('../controller/user.controller')

router.post('/', inserUser)
// router.get('/', selectUser)

module.exports = router