const mongoose = require("mongoose");

const studentsData = new mongoose.Schema([
  {
    studentInfo: {
      studentFullName: {
        required: true,
        type: String,
      },
      dateOfBirth: {
        required: true,
        type: String,
      },
      gender: {
        required: true,
        type: String,
      },
      adharNumber: {
        required: true,
        type: String,
      },
      categorgy: {
        required: true,
        type: String,
      },
      classJoining: {
        required: true,
        type: String,
      },
      dateOfAdmission: {
        required: true,
        type: String,
      },
      emailId: {
        required: true,
        type: String,
      },
      contactNumber: {
        required: true,
        type: String,
      },
      studentProfile: {
        required: true,
        type: String,
      },
      MotherTongue: {
        required: true,
        type: String,
      },
      religion: {
        required: true,
        type: String,
      },
      bloodGroup: {
        required: true,
        type: String,
      },
      birthCertificate: {
        required: true,
        type: String,
      },
      studentType: {
        required: true,
        type: String,
      },
    },
  },
  {
    parentsInfo: {
      fatherName: {
        required: true,
        type: String,
      },
      fatherOccupation: {
        required: true,
        type: String,
      },
      fatherHigherEducation: {
        required: true,
        type: String,
      },
      motherName: {
        required: true,
        type: String,
      },
      motherOccupation: {
        required: true,
        type: String,
      },
      motherHigherEducation: {
        required: true,
        type: String,
      },
      localGurdian: {
        required: true,
        type: String,
      },
      gurdianContactNumber: {
        required: true,
        type: String,
      },
      primaryConactNumber: {
        required: true,
        type: String,
      },
      localAddress: {
        required: true,
        type: String,
      },
      PermenantAddress: {
        required: true,
        type: String,
      },
      emailId: {
        required: true,
        type: String,
      },
      familyYearlyIcome: {
        required: true,
        type: String,
      },
      gurdianProfile: {
        required: true,
        type: String,
      },
    },
  },
  {
    previousAcademicDetails: {
      lastClassDetails: {
        required: true,
        type: String,
      },
      schoolName: {
        required: true,
        type: String,
      },
      lastAcedamicPercentage: {
        required: true,
        type: String,
      },
      transferCertificate: {
        required: true,
        type: String,
      },
    },
  },
  {
    others: {
      transportationMode: {
        required: true,
        type: String,
      },
    },
  },
]);

const student = mongoose.model("studentData", studentsData);
module.exports = student;
