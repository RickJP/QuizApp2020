const express = require('express');
const mongoose = require('mongoose');
const quiz = require('../models/quiz');

const controller = require('../controllers/quiz');

module.exports = router => {
  router
    .route('/question')
    .get(controller.displayQuestion)
    .post(controller.createQuestion);
  // .delete( deleteAll )

  // router.route('/:questionId');
  // .patch( editQuestion )
  // .delete( deleteQuestion )

  router.route('/questions/all').get(controller.displayAllQuestions);
};
