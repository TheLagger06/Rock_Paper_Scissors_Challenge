const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const choice = req.body.choice;
  const battle = req.app.locals.battle;
  const player1 = battle.currentPlayer();
  player1.choice = choice;
  const player2 = battle.otherPlayer();
  player2.choice = battle.computerChoice();
  const winner = battle.result(player1, player2);


  res.render('result', {
    winner: winner,
    player1: player1,
    player2: player2
  });
})



router.get('/', (req, res) => {
  const battle = req.app.locals.battle;
  const player1 = battle.currentPlayer();
  const player2 = battle.otherPlayer();
  const winner = battle.result(player1, player2);
  res.render('result', {
    winner: winner,
    player1: player1,
    player2: player2
  });
})

module.exports = router;
