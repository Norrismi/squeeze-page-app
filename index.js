const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express();

mongoose.Promise = global.Promise

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

app.use(bodyParser.json())
app.use(cors())

require('./userRoutes')(app)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening ${port}`);
});
