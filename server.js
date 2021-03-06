require('dotenv').config()

const express = require("express");

const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var session = require('express-session')

//logs
app.use(morgan("dev"));

//use sessions for tracking logins
app.use(session({
  secret: 'keyboard cat', 
  cookie:{httpOnly: false, maxAge: 1000 * 60 * 60 * 24},
  name:'__id'
}));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ecoChefDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
