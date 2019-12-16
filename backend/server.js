const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const router = express.Router();
const routes = require('./routes');

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  console.log('DB Connected)')
}, err => {
  console.log('DB could not connect');
})
;

const port = process.env.PORT || 3200;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/quiz', routes(router));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.use((req, res, next) => {
  next(createError(404))
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})