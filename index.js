const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());


require("./userRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening ${port}`);
});
