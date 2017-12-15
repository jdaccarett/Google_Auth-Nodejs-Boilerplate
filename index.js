const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// If there isnt environment variables by heroku use 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT);
