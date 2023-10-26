const mongoose = require("mongoose");

const cities = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  state_id: {
    type: String,
  },
});

module.exports = mongoose.model("cities", cities);
