const { User } = require("./User");
var cors = require('cors')

module.exports = app => {
  
  app.use(cors())

  app.post(`/`, (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.send('error')
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


};
