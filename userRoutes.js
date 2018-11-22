const { User } = require("./User");

module.exports = app => {
  app.post(`/api/add`, (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        post: true,
        userId: doc._id
      });
    });
  });

  app.get(`/api/get-all`, (req, res) => {
    User.find({}, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(doc);
    });
  });

  // app.use("/", (req, res) => {
  //   if (err) return re.status(400).send(err);
  //   res.sendFile(__dirname + "App.js");
  // });
};
