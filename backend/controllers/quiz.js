const Quiz = require('../models/quiz');

exports.createQuestion = (req, res) => {
  res.json({
    msg: 'Added a question'
  })
}