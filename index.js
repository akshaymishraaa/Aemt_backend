require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
app.use("/api", routes);

database.once("connected", () => {
  console.log("Database Connected");
});

const port = process.env.PORT || 3001;
app.set("port", port);

database.on("error", (error) => {
  console.log(error);
  errorHandler(error);
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});



