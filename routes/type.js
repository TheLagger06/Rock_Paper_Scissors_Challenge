const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');


router.post('/', (req, res) => {
  const type = req.body.type;
  if (type === 'Single') {
    res.render('singlePlayer');
  } else {
    res.render('multiPlayer');
  }
})
  
module.exports = router;
 