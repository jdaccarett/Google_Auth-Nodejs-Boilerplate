const express = require("express");
const mongoose = require("mongoose");
const cookiesSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// cookie setup
app.use(
  cookiesSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// If there isnt environment variables by heroku use 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT);
