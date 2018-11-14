const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express();

mongoose.Promise = global.Promise

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json())

require('./userRoutes')(app)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening ${port}`);
});
