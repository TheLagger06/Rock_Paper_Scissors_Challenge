const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');

router.post('/', (req, res) => {
  const battle = new Battle();
  const names = [req.body.player1, req.body.player2];
  battle.setup(names);
  req.app.locals.battle = battle;
  
res.redirect('/game2');

})

router.get('/', (req, res) => {
  const player = req.app.locals.battle.currentPlayer();

  res.render('game2', {
    name: player.name,
    health: player.health
  });



  

})

module.exports = router;
