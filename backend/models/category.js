const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
 
autoIncrement.initialize(connection);

const CategorySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {timestamps: true})


CategorySchema.plugin(autoIncrement.plugin, 'Category');


module.exports= connection.model('Category', CategorySchema);



// module.exports = mongoose.model("Category", CategorySchema);