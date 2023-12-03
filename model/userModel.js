const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  orgName: {
    required: true,
    type: String,
  },
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
    type: Array,
  },
  module: {
    required: true,
    type: Array,
  },
});
const user = mongoose.model("userData", userData);

module.exports = user;
