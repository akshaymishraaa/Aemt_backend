const mongoose = require("mongoose");

const studentsData = new mongoose.Schema({
  studentInfo: {
    studentFullName: {
      required: false,
      type: String,
    },
    dateOfBirth: {
      required: false,
      type: String,
    },
    gender: {
      required: false,
      type: String,
    },
    adharNumber: {
      required: false,
      type: String,
    },
    categorgy: {
      required: false,
      type: String,
    },
    classJoining: {
      required: false,
      type: String,
    },
    dateOfAdmission: {
      required: false,
      type: String,
    },
    emailId: {
      required: false,
      type: String,
    },
    contactNumber: {
      required: false,
      type: String,
    },
    studentProfile: {
      required: false,
      type: String,
    },
    MotherTongue: {
      required: false,
      type: String,
    },
    religion: {
      required: false,
      type: String,
    },
    bloodGroup: {
      required: false,
      type: String,
    },
    birthCertificate: {
      required: false,
      type: String,
    },
    studentType: {
      required: false,
      type: String,
    },
  },

  parentsInfo: {
    fatherName: {
      required: false,
      type: String,
    },
    fatherOccupation: {
      required: false,
      type: String,
    },
    fatherHigherEducation: {
      required: false,
      type: String,
    },
    motherName: {
      required: false,
      type: String,
    },
    motherOccupation: {
      required: false,
      type: String,
    },
    motherHigherEducation: {
      required: false,
      type: String,
    },
    localGurdian: {
      required: false,
      type: String,
    },
    gurdianContactNumber: {
      required: false,
      type: String,
    },
    primaryConactNumber: {
      required: false,
      type: String,
    },
    localAddress: {
      required: false,
      type: String,
    },
    PermenantAddress: {
      required: false,
      type: String,
    },
    emailId: {
      required: false,
      type: String,
    },
    familyYearlyIcome: {
      required: false,
      type: String,
    },
    gurdianProfile: {
      required: false,
      type: String,
    },
  },

  previousAcademicDetails: {
    lastClassDetails: {
      required: false,
      type: String,
    },
    schoolName: {
      required: false,
      type: String,
    },
    lastAcedamicPercentage: {
      required: false,
      type: String,
    },
    transferCertificate: {
      required: false,
      type: String,
    },
  },

  others: {
    transportationMode: {
      required: false,
      type: String,
    },
  },
});

const student = mongoose.model("studentData", studentsData);
module.exports = student;
