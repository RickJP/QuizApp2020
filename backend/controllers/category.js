const Category = require('../models/category');

module.exports = {
  createCategory: (req, res) => {

    const { name } = req.body;
    const category = new Category({ name });
    
    let result = {}
    let status = 201;

    category.save((err, category) => {
      if (!err) {
        result.status = status;
        result.result = category;
      } else {
        status = 500;
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    })
  }, 


  displayAllCategories: (req, res) => {
    res.json({
      msg: 'Show Categories'
    })
  }
}