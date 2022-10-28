const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');
const typeRouter = require('./routes/type.js');
const resultRouter = require('./routes/result.js');
const game2Router = require('./routes/game2.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);
app.use('/type', typeRouter);
app.use('/result', resultRouter);
app.use('/game2', game2Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
