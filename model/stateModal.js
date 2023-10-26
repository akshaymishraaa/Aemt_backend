const mongoose = require("mongoose");

const state = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  country_id: {
    type: String,
  },
});

module.exports = mongoose.model("state", state);
