const Cat = require('../models/cat');

module.exports = {
  index,
};

function index(req, res) {
  const cats = Cat.getAll();
  res.json(cats);
}
