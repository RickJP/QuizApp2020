const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const quiz = require('../models/quiz');

const { createQuestion } = require('../controllers/quiz');

router.route('/')
  .get( createQuestion );


  module.exports = router;