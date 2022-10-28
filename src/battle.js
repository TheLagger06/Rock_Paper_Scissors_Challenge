const Player = require('./player.js');

class Battle {
  setup(names, playerClass = Player) {
    this.players = names.map(name => new playerClass(name));
  }


  currentPlayer() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[1];
  }

  switch() {
    this.players.reverse();
  }

  computerChoice() {
    var words = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    var word = words[Math.floor(Math.random() * words.length)];
  
    return word;
  }

   result(player1, player2) {
    if (player1.choice === player2.choice) {
      return 'Draw';
    } else if (player1.choice === 'Rock' && player2.choice === 'Scissors' ||  player1.choice === 'Rock' && player2.choice === 'Lizard') {
      return player1.name;
    } else if (player1.choice === 'Paper' && player2.choice === 'Rock'|| player1.choice === 'Paper' &&  player2.choice === 'Spock') {
      return player1.name;
    } else if (player1.choice === 'Scissors' && player2.choice === 'Paper'|| player1.choice === 'Scissors' &&player2.choice === 'Lizard') {
      return player1.name;
    } else if (player1.choice === 'Lizard' && player2.choice === 'Spock'|| player1.choice === 'Lizard' && player2.choice === 'Paper') {
      return player1.name;
    } else if (player1.choice === 'Spock' && player2.choice === 'Scissors'|| player1.choice === 'Spock' && player2.choice === 'Rock') {
      return player1.name;
    }  else {  
      return player2.name;
    } 

  }
  
}

module.exports = Battle;