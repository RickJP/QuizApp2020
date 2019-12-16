const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
 
autoIncrement.initialize(connection);

const QuizSchema = new mongoose.Schema({
  question: { 
    type: String,
    required: true,
    trim: true
  },
  options: {
    type: [ String ],
    required: true,
  },
  categoryId: {
    type: Number,
    ref: "Category",
    required: true
  }
  
}, {timestamps: true})

QuizSchema.plugin(autoIncrement.plugin, {model: 'Quiz', field: 'categoryId'});

module.exports = mongoose.model("Quiz", QuizSchema);