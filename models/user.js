var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  savedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ]
});

UserSchema.methods = {
  hashPassword: plainText => bcrypt.hashSync(plainText, 14),
  checkPassword: inputPassword =>
    bcrypt.compareSync(inputPassword, this.password)
};

//hashing a password before saving it to the database
UserSchema.pre("save", function(next) {
  console.log("IN BCRYPT");
  if (!this.password) {
    console.log("NO PASWORD PROVIDED");
    next();
  } else {
    console.log("HASH SUCCESS");
    this.password = this.hashPassword(this.password);
    next();
  }
  // var user = this;
  // bcrypt.hash(user.password, 14, function (err, hash) {
  //   if (err) {
  //     return next(err);
  //   }
  //   user.password = hash;
  //   next();
  // })
});

//authenticate input against database
UserSchema.statics.authenticate = (email, password, callback) => {
  User.findOne({ email: email }).exec((err, user) => {
    if (err) {
      return callback(err);
    }
    if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }

    // if (!localThis.checkPassword(password, user.password)) {
    //   console.log("PASSWORD DOES NOT MATCH!");
    //   return callback("PASSWORD DOES NOT MATCH!");
    // }

    // return callback(null, user);

    bcrypt.compare(password, user.password, function(err, result) {
      console.log("in COMPARE");

      console.log(err, result)
      if (result === true) {
        console.log("COMPARE MATCHES");
        return callback(null, user);
      } else {
        return callback(new Error("no match"));
      }
    });
  });
};
var User = mongoose.model("User", UserSchema);
module.exports = User;
