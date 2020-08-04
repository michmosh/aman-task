var express = require('express');
var router = express.Router();
const json = require('../db/db.json');

router.post('/login', function (req, res) {
  res.send({status:"loggedIn"})
})
router.get('/jokes/:id', function (req, res) {
  res.send(req.params.id)
})
router.get('/jokes', function (req, res) {
  res.send(json)
})

module.exports = router;