const student = require("../model/studentModel");

const AddStudent = async (req, res) => {
  try {
    let studentDTO = {};
    req.body.map((item) => {
      studentDTO = {...studentDTO,...item}
    });
    const data = await student.create({ ...studentDTO});
    res.status(200).json({
      message: "Student admission successfully completed.",
      data:data
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findStudentById = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await student.findById(_id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStudentDetails = async (req, res) => {
  try {
    const data = await student.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudentData = req.body;
    const options = { new: true }; // this true or false will specify that whether we want to return a new data in body or not.
    const data = await student.findByIdAndUpdate(id, updatedStudentData, options);

    res.send(data);
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
};

module.exports = {AddStudent,findStudentById,getAllStudentDetails,updateStudentById};
