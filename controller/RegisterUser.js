const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;