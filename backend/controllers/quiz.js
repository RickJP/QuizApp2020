const Quiz = require('../models/quiz');

module.exports = {
  createQuestion: (req, res) => {

    const { question, options, categoryId } = req.body;
    const quiz = new Quiz({question, options, categoryId });
    
    
    // quiz.save((err, user) => {
    //   if (!err) {
    //     result.status = status;
    //     result.result = user;
    //   } else {
    //     status = 500;
    //     result.status = status;
    //     result.error = err;
    //   }
    //   res.status(status).send(result);
    // })


    res.json({
      question,
      options,
      categoryId
    })
  }, 
  displayQuestion: (req, res) => {
    res.json({
      msg: 'Show Question'
    })
  }, displayAllQuestions: (req, res) => {
    res.json({
      msg: 'Show All Questions'
    })
  }
}