const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    //validate request
    if (
      req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf
    ) {
      //create data
      const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      };
      db.User.create(userData)
        .then(dbModel => {
          // setting the client cookie
          req.session.user = dbModel;
          return res.json(dbModel);
        })
        .catch(err => {
          console.log(err);
          res.status(422).json(err);
        });
    } else {
      console.log("else");
      res.send("NOT ENOUGH VALID FIELDS!");
    }
  },

  login: function (req, res, next) {
    console.log("login");

    //validate request
    if (req.body.email && req.body.password) {
      db.User.authenticate(req.body.email, req.body.password, function (error, user) {
        if (error || !user) {
          console.log('err')
          var err = new Error("Wrong email or password.");
          err.status = 401;
          return next(err);
        } else {
          console.log(`login in user: `);
          req.session.user = user;
          return res.json(req.session.user);
        }
      });
    } else {
      var err = new Error("All fields required.");
      err.status = 400;
      return next(err);
    }
  },

  authenticate: function (req, res, next) {
    console.log(
      `req.session/userController:authenticate ${JSON.stringify(
        req.session,
        null,
        4
      )}`
    );
    if (!req.session.user) return res.status(401).json("please log in")
    return res.json(req.session.user);
  },
  logout: function (req, res, next) {
    console.log(
      `req.session/userController:authenticate ${JSON.stringify(
        req.session,
        null,
        4
      )}`
    );
    req.session.destroy(err => {
      if (err) res.status(422).json(err);
      res.json('logged out')
    })
  },
  update: function (req, res) {
    // console.log(req.body.id, req.body.recipeID)
    db.User
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          $push:
            { savedRecipes: req.body.recipeID }
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },




};
