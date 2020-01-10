const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(
  process.env.MongDB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Mongoose is connected")
);

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
