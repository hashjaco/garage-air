const express = require("express");
const app = express();
const cors = require("cors");
const garageRouter = require("./routes/garage_routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/garages", garageRouter);

module.exports = app;
