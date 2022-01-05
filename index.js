const express = require('express');
const questions = require('./controllers/question.controller')
const app = express();
const port = 3000;

app.use('/', questions)
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});