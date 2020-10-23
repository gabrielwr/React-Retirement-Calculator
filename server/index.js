const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "a wildly insecure secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(volleyball);

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

//Sends index.html file to client on all get requests
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
