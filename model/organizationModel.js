const mongoose = require("mongoose");

const organizationData = new mongoose.Schema({
  organizationName: {
    required: true,
    type: String,
  },
  organizationEmailId: {
    required: true,
    type: String,
    unique:true,
  },
  contactNumber: {
    required: true,
    type: Number,
  },
  organizationType: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: Object,
  },
  country: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  zipCode: {
    required: true,
    type: Number,
  },
  regEmpId: {
    required: true,
    type: String,
  },
});

const organization = mongoose.model("organization", organizationData);

module.exports = organization;
