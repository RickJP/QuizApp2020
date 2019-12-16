const quiz = require('./quiz');
const category = require('./category')

module.exports = (router) => {
  quiz(router);
  category(router);
  return router;
}