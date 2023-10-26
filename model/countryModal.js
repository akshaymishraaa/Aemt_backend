const mongoose = require("mongoose");

const countries = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  sortName: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports=mongoose.model("Countries",countries)