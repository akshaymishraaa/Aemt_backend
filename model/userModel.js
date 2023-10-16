const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  contactNo: {
    required: true,
    type: Number,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  module: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("userData", userData);