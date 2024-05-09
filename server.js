const express = require('express');

// Middleware will be required here
const cors = require('cors');
const logger = require('morgan');
const catsRouter = require('./routes/cats');

const PORT = process.env.PORT || 3000;
const app = express();

// MIDDLEWARE PIPELINE
// Middleware will be used here
app.use(cors());
app.use(logger('dev'));

// Routes will go here
app.get('/', function (req, res) {
  res.json({ msg: 'Server running!' });
});

app.use('/cats', catsRouter);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
