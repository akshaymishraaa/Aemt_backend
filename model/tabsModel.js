const mongoose = require("mongoose");

const statics = new mongoose.Schema({
  tabs: { type: Array },
});

module.exports = mongoose.model("statics", statics);
