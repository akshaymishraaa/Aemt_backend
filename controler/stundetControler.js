const student = require("../model/studentModel");

const AddStudent = async (req, res) => {
  try {
    await student.create({ ...req.body });
    res.status(200).json({
      message: "Addmission successfull",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = AddStudent;
