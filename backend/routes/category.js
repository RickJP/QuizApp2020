const express = require('express');
const mongoose = require('mongoose');
const category = require('../models/category');

const controller = require('../controllers/category');

module.exports = router => {
  router
    .route('/category')
    .get(controller.displayAllCategories)
    .post(controller.createCategory);
};
