const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuizSchema = new mongoose.Schema({
  question: { 
    type: String,
    required: true,
    trim: true
  },
  options: {
    type: [ String ],
    required: true,
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
  
}, {timestamps: true})

module.exports = mongoose.model("Quiz", QuizSchema);