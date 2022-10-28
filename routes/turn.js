const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const choice = req.body.choice;
  const battle = req.app.locals.battle;
  const currentPlayer = battle.currentPlayer();
  currentPlayer.choice = choice;
  const otherPlayer = battle.otherPlayer();
  battle.switch();
  
 
  if (otherPlayer.choice === "") {
   res.render('turn', {
    name: currentPlayer.name,
    choice: currentPlayer.choice
  });
  } else {
    res.redirect('/result');
  };


})


module.exports = router;
